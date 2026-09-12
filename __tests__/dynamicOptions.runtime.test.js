import path from 'path';
import { fileURLToPath } from 'url';
import { describe, it, expect, beforeAll, beforeEach } from 'vitest';

import { buildFramework } from './helpers/renderK';

const outDir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'generated', 'dynamicOptions');

const sheet = `
+customControlFieldset({name:'inventory'})
  +text({name:'name'})
+select({name:'equipped item'})
  +option({value:'none','data-i18n':'none'})
  +dynamicOptions({section:'inventory',label:'name'})
+kscript
`;

let fw;
const waitForHandlers = () => new Promise((resolve) => setTimeout(resolve, 10));
const fire = (eventName, event = {}) => {
  const entries = fw.environment.triggers.filter((t) => t.trigger.split(' ').includes(eventName));
  if (!entries.length) throw new Error(`No trigger registered for ${eventName}. Registered: ${fw.environment.triggers.map((t) => t.trigger).join(', ')}`);
  // Roll20 only sets triggerName on clicked/remove events; change events carry sourceAttribute alone.
  const base = eventName.startsWith('change:') ?
    { sourceAttribute: eventName.replace(/^change:/, '').replace(/:/g, '_') } :
    { sourceAttribute: eventName.replace(/^[^:]+:/, ''), triggerName: eventName };
  entries.forEach((t) => t.func({ ...base, ...event }));
};
const lastPopulate = () => {
  const calls = fw.populateListOptions.mock.calls;
  return calls[calls.length - 1][0];
};

describe('dynamic select options at runtime (declarative form)', () => {
  beforeAll(async () => {
    fw = await buildFramework(sheet, outDir, { none: 'Nothing equipped' });
    await waitForHandlers();
  });
  beforeEach(() => {
    fw.populateListOptions.mockClear();
    fw.environment.attributes = {
      equipped_item: 'none',
      'repeating_inventory_-row1_name': 'Sword',
      'repeating_inventory_-row2_name': 'Shield',
    };
  });

  it('rebuilds the option list from the section rows when the sheet opens', () => {
    fire('sheet:opened');
    expect(fw.populateListOptions).toHaveBeenCalledTimes(1);
    expect(lastPopulate()).toMatchObject({
      elemSelector: 'select[name="attr_equipped_item"]',
      optionsArray: [
        { value: 'none', label: 'Nothing equipped', selected: true },
        { value: '-row1', label: 'Sword' },
        { value: '-row2', label: 'Shield' },
      ],
    });
  });
});

describe('dynamic select options react to the source section', () => {
  beforeAll(async () => {
    fw = await buildFramework(sheet, outDir, { none: 'Nothing equipped' });
    await waitForHandlers();
  });
  beforeEach(() => {
    fw.populateListOptions.mockClear();
    fw.setAttrs.mockClear();
    fw.environment.attributes = {
      equipped_item: '-row2',
      'repeating_inventory_-row1_name': 'Sword',
      'repeating_inventory_-row2_name': 'Shield',
    };
  });

  it('updates a label in place and keeps the selection when a row label changes', () => {
    fw.environment.attributes['repeating_inventory_-row1_name'] = 'Longsword';
    fire('change:repeating_inventory:name', { sourceAttribute: 'repeating_inventory_-row1_name', newValue: 'Longsword', previousValue: 'Sword' });
    expect(fw.populateListOptions).toHaveBeenCalledTimes(1);
    expect(lastPopulate().optionsArray).toEqual([
      { value: 'none', label: 'Nothing equipped' },
      { value: '-row1', label: 'Longsword' },
      { value: '-row2', label: 'Shield', selected: true },
    ]);
    expect(fw.environment.attributes.equipped_item).toBe('-row2');
  });

  it('drops a removed row and resets the select to its fallback when that row was selected', () => {
    delete fw.environment.attributes['repeating_inventory_-row2_name'];
    fire('remove:repeating_inventory', { sourceAttribute: 'repeating_inventory_-row2', removedInfo: { 'repeating_inventory_-row2_name': 'Shield' } });
    expect(fw.populateListOptions).toHaveBeenCalledTimes(1);
    expect(lastPopulate().optionsArray).toEqual([
      { value: 'none', label: 'Nothing equipped', selected: true },
      { value: '-row1', label: 'Sword' },
    ]);
    expect(fw.environment.attributes.equipped_item).toBe('none');
  });

  it('leaves the selection alone when a different row is removed', () => {
    delete fw.environment.attributes['repeating_inventory_-row1_name'];
    fire('remove:repeating_inventory', { sourceAttribute: 'repeating_inventory_-row1', removedInfo: { 'repeating_inventory_-row1_name': 'Sword' } });
    expect(lastPopulate().optionsArray).toEqual([
      { value: 'none', label: 'Nothing equipped' },
      { value: '-row2', label: 'Shield', selected: true },
    ]);
    expect(fw.environment.attributes.equipped_item).toBe('-row2');
  });

  it('adds an option for a row created through the custom add button', () => {
    fire('clicked:add-inventory');
    expect(fw.populateListOptions).toHaveBeenCalledTimes(1);
    const options = lastPopulate().optionsArray;
    expect(options).toHaveLength(4);
    const added = options[3];
    expect(added.value).toMatch(/^-/);
    expect(added.label).toBe('');
    expect(fw.environment.attributes[`repeating_inventory_${added.value}_name`]).toBe('');
  });

  it('does not rebuild when the select itself is changed by the user', () => {
    fw.environment.attributes.equipped_item = '-row1';
    fire('change:equipped_item', { sourceAttribute: 'equipped_item', newValue: '-row1', previousValue: '-row2' });
    expect(fw.populateListOptions).not.toHaveBeenCalled();
  });
});

describe('dynamic select options from an option generator function', () => {
  const fnOutDir = `${outDir}Fn`;
  const fnSheet = `
+number({name:'level',value:1})
+number({name:'unrelated',value:0})
+select({name:'spell slot'})
  +option({value:'none'})
    |No slot
  +dynamicOptions({function:'slotOptions',trigger:{affects:['level']}})
+kscript
  |const slotOptions = function({attributes}){
  |  return Array.from({length: attributes.level},(v,i) => ({value:\`slot\${i+1}\`,label:\`Slot \${i+1}\`}));
  |};
  |k.registerFuncs({slotOptions});
`;
  beforeAll(async () => {
    fw = await buildFramework(fnSheet, fnOutDir);
    await waitForHandlers();
  });
  beforeEach(() => {
    fw.populateListOptions.mockClear();
    fw.environment.attributes = { level: 2, unrelated: 0, spell_slot: 'slot2' };
  });

  it('builds the list from the generator on open', () => {
    fire('sheet:opened');
    expect(lastPopulate()).toMatchObject({
      elemSelector: 'select[name="attr_spell_slot"]',
      optionsArray: [
        { value: 'none', label: 'No slot' },
        { value: 'slot1', label: 'Slot 1' },
        { value: 'slot2', label: 'Slot 2', selected: true },
      ],
    });
  });

  it('rebuilds when a declared dependency changes and falls back when the value disappears', () => {
    fw.environment.attributes.level = 1;
    fire('change:level', { sourceAttribute: 'level', newValue: 1, previousValue: 2 });
    expect(fw.populateListOptions).toHaveBeenCalledTimes(1);
    expect(lastPopulate().optionsArray).toEqual([
      { value: 'none', label: 'No slot', selected: true },
      { value: 'slot1', label: 'Slot 1' },
    ]);
    expect(fw.environment.attributes.spell_slot).toBe('none');
  });

  it('ignores attributes that were not declared as dependencies', () => {
    fw.environment.attributes.unrelated = 5;
    fire('change:unrelated', { sourceAttribute: 'unrelated', newValue: 5, previousValue: 0 });
    expect(fw.populateListOptions).not.toHaveBeenCalled();
  });
});

describe('option generator opted into a section (function + section)', () => {
  const fnSectionOutDir = `${outDir}FnSection`;
  const fnSectionSheet = `
+repeating_section('gear','gear header',['name'])
  +text({name:'name'})
  +number({name:'weight',value:0})
+select({name:'heaviest gear'})
  +option({value:'none'})
    |Nothing
  +dynamicOptions({function:'heavyGear',section:'Gear'})
+kscript
  |const heavyGear = function({attributes,sections}){
  |  return (sections.repeating_gear || [])
  |    .map((id) => ({value:id,label:\`\${attributes[\`repeating_gear_\${id}_name\`]} (\${attributes[\`repeating_gear_\${id}_weight\`]})\`}));
  |};
  |k.registerFuncs({heavyGear});
`;
  beforeAll(async () => {
    fw = await buildFramework(fnSectionSheet, fnSectionOutDir);
    await waitForHandlers();
  });
  beforeEach(() => {
    fw.populateListOptions.mockClear();
    fw.environment.attributes = {
      heaviest_gear: '-r1',
      'repeating_gear_-r1_name': 'Anvil',
      'repeating_gear_-r1_weight': 50,
    };
  });

  it('resolves the section case-insensitively and rebuilds through the generator when a row is added', () => {
    fire('clicked:add-gear');
    expect(fw.populateListOptions).toHaveBeenCalledTimes(1);
    const options = lastPopulate().optionsArray;
    expect(options[0]).toEqual({ value: 'none', label: 'Nothing' });
    expect(options[1]).toEqual({ value: '-r1', label: 'Anvil (50)', selected: true });
    expect(options).toHaveLength(3);
  });

  it('rebuilds through the generator when a row is removed', () => {
    delete fw.environment.attributes['repeating_gear_-r1_name'];
    delete fw.environment.attributes['repeating_gear_-r1_weight'];
    fire('remove:repeating_gear', { sourceAttribute: 'repeating_gear_-r1', removedInfo: {} });
    expect(lastPopulate().optionsArray).toEqual([{ value: 'none', label: 'Nothing', selected: true }]);
    expect(fw.environment.attributes.heaviest_gear).toBe('none');
  });

  it('does not rebuild on a row attribute change the generator did not declare', () => {
    fw.environment.attributes['repeating_gear_-r1_weight'] = 60;
    fire('change:repeating_gear:weight', { sourceAttribute: 'repeating_gear_-r1_weight', newValue: 60, previousValue: 50 });
    expect(fw.populateListOptions).not.toHaveBeenCalled();
  });
});
