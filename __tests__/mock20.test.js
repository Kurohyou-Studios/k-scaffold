import { beforeEach, describe, expect, it } from 'vitest';
import { environment, startRoll } from './testFramework';

describe('mock20 dice parser', () => {
  beforeEach(() => {
    environment.attributes = {};
    environment.diceStack = {};
  });

  it('honors keep-highest syntax in roll expressions', async () => {
    environment.diceStack[6] = [4, 6, 2];

    const roll = await startRoll('&{template:default} {{result=[[3d6k1+2]]}}');

    expect(roll.results.result.dice).toEqual([2, 6, 4]);
    expect(roll.results.result.result).toBe(8);
  });

  it('honors keep-lowest syntax in roll expressions', async () => {
    environment.diceStack[6] = [4, 1, 6];

    const roll = await startRoll('&{template:default} {{result=[[3d6kl1+2]]}}');

    expect(roll.results.result.dice).toEqual([6, 1, 4]);
    expect(roll.results.result.result).toBe(3);
  });

  it('honors keep-highest longhand syntax in roll expressions', async () => {
    environment.diceStack[6] = [4, 6, 2];

    const roll = await startRoll('&{template:default} {{result=[[3d6kh1+2]]}}');

    expect(roll.results.result.dice).toEqual([2, 6, 4]);
    expect(roll.results.result.result).toBe(8);
  });

  it('honors drop-lowest syntax in roll expressions', async () => {
    environment.diceStack[6] = [4, 6, 2];

    const roll = await startRoll('&{template:default} {{result=[[3d6d1+2]]}}');

    expect(roll.results.result.dice).toEqual([2, 6, 4]);
    expect(roll.results.result.result).toBe(12);
  });

  it('honors drop-highest syntax in roll expressions', async () => {
    environment.diceStack[6] = [4, 1, 6];

    const roll = await startRoll('&{template:default} {{result=[[3d6dh1+2]]}}');

    expect(roll.results.result.dice).toEqual([6, 1, 4]);
    expect(roll.results.result.result).toBe(7);
  });

  it('honors keeping multiple highest dice', async () => {
    environment.diceStack[6] = [3, 5, 1, 6];

    const roll = await startRoll('&{template:default} {{result=[[4d6k2+1]]}}');

    expect(roll.results.result.dice).toEqual([6, 1, 5, 3]);
    expect(roll.results.result.result).toBe(12);
  });

  it('honors keeping multiple lowest dice', async () => {
    environment.diceStack[6] = [3, 5, 1, 6];

    const roll = await startRoll('&{template:default} {{result=[[4d6kl2+1]]}}');

    expect(roll.results.result.dice).toEqual([6, 1, 5, 3]);
    expect(roll.results.result.result).toBe(5);
  });

  it('honors dropping multiple lowest dice', async () => {
    environment.diceStack[6] = [3, 5, 1, 6];

    const roll = await startRoll('&{template:default} {{result=[[4d6d2+1]]}}');

    expect(roll.results.result.dice).toEqual([6, 1, 5, 3]);
    expect(roll.results.result.result).toBe(12);
  });

  it('honors dropping multiple highest dice', async () => {
    environment.diceStack[6] = [3, 5, 1, 6];

    const roll = await startRoll('&{template:default} {{result=[[4d6dh2+1]]}}');

    expect(roll.results.result.dice).toEqual([6, 1, 5, 3]);
    expect(roll.results.result.result).toBe(5);
  });

  it('honors exploding dice on maximum rolls', async () => {
    environment.diceStack[6] = [3, 2, 4, 6];

    const roll = await startRoll('&{template:default} {{result=[[3d6!+2]]}}');

    expect(roll.results.result.dice).toEqual([6, 4, 2, 3]);
    expect(roll.results.result.result).toBe(17);
  });

  it('honors chained exploding dice', async () => {
    environment.diceStack[6] = [2, 6, 6];

    const roll = await startRoll('&{template:default} {{result=[[1d6!]]}}');

    expect(roll.results.result.dice).toEqual([6, 6, 2]);
    expect(roll.results.result.result).toBe(14);
  });

  it('honors exploding dice compare points', async () => {
    environment.diceStack[6] = [2, 3, 5, 1, 6];

    const roll = await startRoll('&{template:default} {{result=[[3d6!>5+2]]}}');

    expect(roll.results.result.dice).toEqual([6, 1, 5, 3, 2]);
    expect(roll.results.result.result).toBe(19);
  });

  it('preserves existing behavior for rolls without keep modifiers', async () => {
    environment.diceStack[6] = [4, 6, 2];

    const roll = await startRoll('&{template:default} {{result=[[3d6+2]]}}');

    expect(roll.results.result.dice).toEqual([2, 6, 4]);
    expect(roll.results.result.result).toBe(14);
  });

  it('supports simple maths in dice count', async () => {
    environment.diceStack[6] = [4, 6, 2];

    const roll = await startRoll('&{template:default} {{result=[[(1+2)d6+2]]}}');

    expect(roll.results.result.dice).toEqual([2, 6, 4]);
    expect(roll.results.result.result).toBe(14);
  });

  it('treats d as a tightly-binding operator', async () => {
    environment.diceStack[6] = [4, 6, 2];

    const roll = await startRoll('&{template:default} {{result=[[1+2d6+2]]}}');

    expect(roll.results.result.dice).toEqual([2, 6]);
    expect(roll.results.result.result).toBe(11);
  });

  it('should not require a number of dice', async () => {
    environment.diceStack[6] = [3];

    const roll = await startRoll('&{template:default} {{result=[[d6+2]]}}');

    expect(roll.results.result.dice).toEqual([3]);
    expect(roll.results.result.result).toBe(5);
  });

  it('rolls multiple dice expressions in expression order', async () => {
    environment.diceStack[6] = [5, 2];
    environment.diceStack[4] = [3];

    const roll = await startRoll('&{template:default} {{result=[[2d6+1d4+3]]}}');

    expect(roll.results.result.dice).toEqual([2, 5, 3]);
    expect(roll.results.result.result).toBe(13);
  });

  it('supports maths in die size', async () => {
    environment.diceStack[6] = [5, 2];

    const roll = await startRoll('&{template:default} {{result=[[2d(4+2)+1]]}}');

    expect(roll.results.result.dice).toEqual([2, 5]);
    expect(roll.results.result.result).toBe(8);
  });

  it('honors arithmetic precedence around dice expressions', async () => {
    environment.diceStack[6] = [5, 2];

    const roll = await startRoll('&{template:default} {{result=[[(1+2)*2d6]]}}');

    expect(roll.results.result.dice).toEqual([2, 5]);
    expect(roll.results.result.result).toBe(21);
  });

  it('supports math functions around roll expressions', async () => {
    environment.diceStack[6] = [4];

    const roll = await startRoll('&{template:default} {{result=[[ceil(5/2)+d6]]}}');

    expect(roll.results.result.dice).toEqual([4]);
    expect(roll.results.result.result).toBe(7);
  });

  it('applies explode before keep modifiers', async () => {
    environment.diceStack[6] = [3, 6, 1, 5, 2, 6];

    const roll = await startRoll('&{template:default} {{result=[[4d6!kh3]]}}');

    expect(roll.results.result.dice).toEqual([6, 2, 5, 1, 6, 3]);
    expect(roll.results.result.result).toBe(22);
  });

  it('counts success targets', async () => {
    environment.diceStack[6] = [6, 4, 2];

    const roll = await startRoll('&{template:default} {{result=[[3d6>3]]}}');

    expect(roll.results.result.dice).toEqual([2, 4, 6]);
    expect(roll.results.result.result).toBe(2);
  });

  it('uses strict greater-than for success targets', async () => {
    environment.diceStack[6] = [4, 3, 2];

    const roll = await startRoll('&{template:default} {{result=[[3d6>3]]}}');

    expect(roll.results.result.dice).toEqual([2, 3, 4]);
    expect(roll.results.result.result).toBe(1);
  });

  it('subtracts failure targets', async () => {
    environment.diceStack[6] = [6, 4, 2];

    const roll = await startRoll('&{template:default} {{result=[[3d6f<3]]}}');

    expect(roll.results.result.dice).toEqual([2, 4, 6]);
    expect(roll.results.result.result).toBe(-1);
  });

  it('uses strict less-than for failure targets', async () => {
    environment.diceStack[6] = [4, 3, 2];

    const roll = await startRoll('&{template:default} {{result=[[3d6f<3]]}}');

    expect(roll.results.result.dice).toEqual([2, 3, 4]);
    expect(roll.results.result.result).toBe(-1);
  });

  it('combines success and failure targets', async () => {
    environment.diceStack[6] = [6, 4, 2];

    const roll = await startRoll('&{template:default} {{result=[[3d6>3f<3]]}}');

    expect(roll.results.result.dice).toEqual([2, 4, 6]);
    expect(roll.results.result.result).toBe(1);
  });

  it('supports maths around success target rolls', async () => {
    environment.diceStack[6] = [6, 4, 2];

    const roll = await startRoll('&{template:default} {{result=[[3d6>3+2]]}}');

    expect(roll.results.result.dice).toEqual([2, 4, 6]);
    expect(roll.results.result.result).toBe(4);
  });

  it('applies keep modifiers before success targets', async () => {
    environment.diceStack[6] = [1, 5, 2, 6];

    const roll = await startRoll('&{template:default} {{result=[[4d6kh2>4]]}}');

    expect(roll.results.result.dice).toEqual([6, 2, 5, 1]);
    expect(roll.results.result.result).toBe(2);
  });
});
