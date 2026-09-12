import { describe, it, expect, beforeAll } from 'vitest';
import { environment, k } from './testFramework';

// Regression for the report by Riernar: the trigger cascade used to be keyed on the element's
// `title` (which mixins default to the attribute call) instead of the attribute `name`. A custom
// title (e.g. a tooltip) therefore replaced the cascade key and silently broke the cascade.
// The inputs under test live in test_sheet/source/zProxyRegression.test.pug.
const waitForHandlers = () => new Promise((resolve) => setTimeout(resolve, 10));

describe('cascade keying with custom titles', () => {
  beforeAll(async () => {
    await waitForHandlers();
  });

  it('keys a plain attribute on its name, not its title', () => {
    expect(k.cascades).toHaveProperty('attr_custom_title_attr');
    expect(k.cascades).not.toHaveProperty('attr_a custom tooltip');
    const casc = k.cascades.attr_custom_title_attr;
    expect(casc.name).toBe('custom_title_attr');
    expect(casc.listener).toBe('change:custom_title_attr');
    expect(casc.affects).toContain('proxy_cascade_target');
  });

  it('keys a repeating attribute on its section + name, not its title', () => {
    expect(k.cascades).toHaveProperty('attr_repeating_proxysort_$x_custom_title_weight');
    const casc = k.cascades['attr_repeating_proxysort_$x_custom_title_weight'];
    expect(casc.listener).toBe('change:repeating_proxysort:custom_title_weight');
  });

  it('registers change listeners under the attribute names', () => {
    const registered = environment.triggers.flatMap((t) => t.trigger.split(' '));
    expect(registered).toContain('change:custom_title_attr');
    expect(registered).toContain('change:repeating_proxysort:custom_title_weight');
  });
});
