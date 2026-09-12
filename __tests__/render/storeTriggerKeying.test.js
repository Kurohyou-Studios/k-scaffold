import { describe, it, expect, beforeEach } from 'vitest';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const locals = require('../../lib/render/locals/index.js');
const { varObjects, storeTrigger, resetObjs, attrName, attrTitle } = locals;

// Mirror what +input does in lib/attribute_holders/_inputs.pug
const simulateInput = (obj) => {
  obj.name = attrName(obj.name);
  obj.title = obj.title || attrTitle(obj.name);
  obj.name = `attr_${obj.name}`;
  storeTrigger(obj);
};

describe('storeTrigger cascade keying', () => {
  beforeEach(() => resetObjs());

  it('keys the cascade on the attribute name when no title supplied', () => {
    simulateInput({ name: 'hit points', type: 'number', trigger: { affects: ['other'] } });
    expect(Object.keys(varObjects.cascades)).toContain('attr_hit_points');
    expect(varObjects.cascades.attr_hit_points.name).toBe('hit_points');
  });

  it('keys the cascade on the attribute name even when a custom title is supplied', () => {
    simulateInput({ name: 'hit points', type: 'number', title: 'Your current health', trigger: { affects: ['other'] } });
    expect(Object.keys(varObjects.cascades)).toContain('attr_hit_points');
    expect(varObjects.cascades.attr_hit_points.name).toBe('hit_points');
    expect(varObjects.cascades.attr_hit_points.listener).toBe('change:hit_points');
  });
});

describe('storeTrigger cascade keying — cases the fix must preserve', () => {
  beforeEach(() => resetObjs());

  it('inside a fieldset, keys on the repeating prefix + field and builds a repeating listener', () => {
    locals.k.repeatingPrefix = 'repeating_weapons_$X_';
    simulateInput({ name: 'damage', type: 'text', trigger: { affects: ['other'] } });
    locals.k.repeatingPrefix = '';
    expect(Object.keys(varObjects.cascades)).toContain('attr_repeating_weapons_$x_damage');
    expect(varObjects.cascades['attr_repeating_weapons_$x_damage'].listener).toBe('change:repeating_weapons:damage');
  });

  it('inside a fieldset with a custom title, still keys on the repeating prefix + field', () => {
    locals.k.repeatingPrefix = 'repeating_weapons_$X_';
    simulateInput({ name: 'damage', type: 'text', title: 'Damage dice', trigger: { affects: ['other'] } });
    locals.k.repeatingPrefix = '';
    expect(Object.keys(varObjects.cascades)).toContain('attr_repeating_weapons_$x_damage');
    expect(varObjects.cascades['attr_repeating_weapons_$x_damage'].listener).toBe('change:repeating_weapons:damage');
  });

  it('keys _max attributes as attr_<name>_max', () => {
    simulateInput({ name: 'hp_max', type: 'number', trigger: { affects: ['other'] } });
    expect(Object.keys(varObjects.cascades)).toContain('attr_hp_max');
    expect(varObjects.cascades.attr_hp_max.listener).toBe('change:hp_max');
  });

  it('respects the system prefix in the key', () => {
    locals.setSystemPrefix('dnd');
    simulateInput({ name: 'strength', type: 'number', trigger: { affects: ['other'] } });
    locals.setSystemPrefix('');
    expect(Object.keys(varObjects.cascades)).toContain('attr_dnd_strength');
  });
});
