import { describe, it, expect } from 'vitest';

import { renderK, extractScriptConst } from './helpers/renderK';

describe('+dynamicOptions compile-time behavior', () => {
  it('errors when a +select uses +dynamicOptions with no static +option fallback', () => {
    expect(() => renderK(`
+customControlFieldset({name:'inventory'})
  +text({name:'name'})
+select({name:'equipped item'})
  +dynamicOptions({section:'inventory',label:'name'})
+kscript
`)).toThrow(/equipped_item.*at least one static \+option/i);
  });
});

describe('+dynamicOptions declarative form', () => {
  const sheet = `
+customControlFieldset({name:'inventory'})
  +text({name:'name'})
+select({name:'equipped item'})
  +option({value:'none','data-i18n':'none'})
  +dynamicOptions({section:'inventory',label:'name'})
+kscript
`;
  it('renders only the static options into the html', () => {
    const { html } = renderK(sheet);
    expect(html).toMatch(/<select[^>]*name="attr_equipped_item"/);
    expect(html.match(/<option/g)).toHaveLength(1);
  });
  it('emits a dynamicOptions registry describing the select for the sheetworkers', () => {
    const { html } = renderK(sheet);
    const registry = extractScriptConst(html, 'dynamicOptions');
    expect(registry.equipped_item).toEqual({
      name: 'equipped_item',
      selector: 'select[name="attr_equipped_item"]',
      fallback: 'none',
      entries: [
        { type: 'static', value: 'none', i18n: 'none' },
        { type: 'section', section: 'repeating_inventory', label: 'name' },
      ],
    });
  });
  it('injects the rebuild function into the label attribute and the fieldset cascade entries', () => {
    const { html } = renderK(sheet);
    const cascades = extractScriptConst(html, 'cascades');
    expect(cascades['attr_repeating_inventory_$x_name'].triggeredFuncs).toContain('kDynamicOptionsUpdate');
    expect(cascades['fieldset_repeating_inventory'].addFuncs).toContain('kDynamicOptionsUpdate');
    expect(cascades['fieldset_repeating_inventory'].triggeredFuncs).toContain('kDynamicOptionsUpdate');
    expect(cascades['fieldset_repeating_inventory'].listener).toBe('remove:repeating_inventory');
  });
});

describe('+dynamicOptions validation errors', () => {
  it('errors when the declarative form targets a section declared with plain +fieldset', () => {
    expect(() => renderK(`
+fieldset({name:'inventory'})
  +text({name:'name'})
+select({name:'equipped item'})
  +option({value:'none'})
  +dynamicOptions({section:'inventory',label:'name'})
+kscript
`)).toThrow(/repeating_inventory.*\+customControlFieldset/);
  });
  it('errors when the referenced section does not exist', () => {
    expect(() => renderK(`
+select({name:'equipped item'})
  +option({value:'none'})
  +dynamicOptions({section:'inventory',label:'name'})
+kscript
`)).toThrow(/repeating_inventory.*no fieldset/);
  });
  it('errors when the label attribute does not exist in the section', () => {
    expect(() => renderK(`
+customControlFieldset({name:'inventory'})
  +text({name:'name'})
+select({name:'equipped item'})
  +option({value:'none'})
  +dynamicOptions({section:'inventory',label:'title'})
+kscript
`)).toThrow(/no attribute named "title" exists in "repeating_inventory"/);
  });
  it('errors when the declarative form omits the label', () => {
    expect(() => renderK(`
+select({name:'equipped item'})
  +option({value:'none'})
  +dynamicOptions({section:'inventory'})
`)).toThrow(/requires both "section" and "label"/);
  });
  it('errors when neither section nor function is given', () => {
    expect(() => renderK(`
+select({name:'equipped item'})
  +option({value:'none'})
  +dynamicOptions({label:'name'})
`)).toThrow(/requires either a "section".*or a "function"/);
  });
  it('errors when used on a select inside a repeating section', () => {
    expect(() => renderK(`
+customControlFieldset({name:'inventory'})
  +text({name:'name'})
  +select({name:'slot'})
    +option({value:'none'})
    +dynamicOptions({section:'inventory',label:'name'})
`)).toThrow(/not supported on selects inside a repeating section/);
  });
  it('errors when a option generator depends on an attribute that does not exist', () => {
    expect(() => renderK(`
+select({name:'equipped item'})
  +option({value:'none'})
  +dynamicOptions({function:'genFn',trigger:{affects:['missing attribute']}})
+kscript
`)).toThrow(/trigger\.affects names "missing_attribute"/);
  });
  it('does not run the checks on sheets that never use +dynamicOptions', () => {
    const { html } = renderK(`
+fieldset({name:'inventory'})
  +text({name:'name'})
+select({name:'plain'})
  +option({value:'a'})
+kscript
`);
    expect(extractScriptConst(html, 'dynamicOptions')).toEqual({});
  });
});

describe('+dynamicOptions option generator form', () => {
  it('registers the generator and wires its declared dependencies', () => {
    const { html } = renderK(`
+number({name:'level'})
+select({name:'spell slot'})
  +option({value:'none'})
  +dynamicOptions({function:'slotOptions',trigger:{affects:['level']}})
+kscript
`);
    const registry = extractScriptConst(html, 'dynamicOptions');
    expect(registry.spell_slot.entries[1]).toEqual({ type: 'function', function: 'slotOptions', affects: ['level'] });
    const cascades = extractScriptConst(html, 'cascades');
    expect(cascades.attr_level.triggeredFuncs).toContain('kDynamicOptionsUpdate');
  });
  it('opts into fieldset add/remove wiring when a section is also named', () => {
    const { html } = renderK(`
+repeating_section('inventory','inventory header')
  +text({name:'name'})
+select({name:'equipped item'})
  +option({value:'none'})
  +dynamicOptions({function:'inventoryOptions',section:'inventory'})
+kscript
`);
    const registry = extractScriptConst(html, 'dynamicOptions');
    expect(registry.equipped_item.entries[1]).toEqual({ type: 'function', function: 'inventoryOptions', section: 'repeating_inventory', affects: [] });
    const cascades = extractScriptConst(html, 'cascades');
    expect(cascades.fieldset_repeating_inventory.addFuncs).toContain('kDynamicOptionsUpdate');
    expect(cascades.fieldset_repeating_inventory.triggeredFuncs).toContain('kDynamicOptionsUpdate');
    expect(cascades['attr_repeating_inventory_$x_name'].triggeredFuncs || []).not.toContain('kDynamicOptionsUpdate');
  });
});

describe('+dynamicOptions section name resolution', () => {
  it('matches the declared section case-insensitively and records the declared spelling', () => {
    const { html } = renderK(`
+customControlFieldset({name:'Gear'})
  +text({name:'name'})
+select({name:'equipped item'})
  +option({value:'none'})
  +dynamicOptions({section:'gear',label:'name'})
+kscript
`);
    const registry = extractScriptConst(html, 'dynamicOptions');
    expect(registry.equipped_item.entries[1]).toEqual({ type: 'section', section: 'repeating_Gear', label: 'name' });
    const cascades = extractScriptConst(html, 'cascades');
    expect(cascades['attr_repeating_gear_$x_name'].triggeredFuncs).toContain('kDynamicOptionsUpdate');
    expect(cascades['fieldset_repeating_gear'].addFuncs).toContain('kDynamicOptionsUpdate');
  });
  it('finds a section declared under a system prefix when the select shares that prefix', () => {
    const { html } = renderK(`
- setSystemPrefix('dnd');
+customControlFieldset({name:'gear'})
  +text({name:'name'})
+select({name:'equipped item'})
  +option({value:'none'})
  +dynamicOptions({section:'gear',label:'name'})
+kscript
`);
    const registry = extractScriptConst(html, 'dynamicOptions');
    expect(registry.dnd_equipped_item.entries[1].section).toBe('repeating_dnd-gear');
  });
  it('does not let a plain +fieldset opt in through the customControl handshake', () => {
    expect(() => renderK(`
+fieldset({name:'gear',customControl:true})
  +text({name:'name'})
+select({name:'equipped item'})
  +option({value:'none'})
  +dynamicOptions({section:'gear',label:'name'})
+kscript
`)).toThrow(/\+customControlFieldset/);
  });
});

describe('+dynamicOptions static option handling', () => {
  it('keeps author order, uses the selected static option as the fallback, and captures block text labels', () => {
    const { html } = renderK(`
+customControlFieldset({name:'inventory'})
  +text({name:'name'})
+select({name:'equipped item'})
  +option({value:''})
    |Choose an item
  +dynamicOptions({section:'inventory',label:'name'})
  +option({value:'unarmed',selected:''})
    |Unarmed
+kscript
`);
    const registry = extractScriptConst(html, 'dynamicOptions');
    expect(registry.equipped_item.fallback).toBe('unarmed');
    expect(registry.equipped_item.entries).toEqual([
      { type: 'static', value: '', label: 'Choose an item' },
      { type: 'section', section: 'repeating_inventory', label: 'name' },
      { type: 'static', value: 'unarmed', label: 'Unarmed' },
    ]);
  });
});
