import { describe, it, expect, vi } from 'vitest';
import resolvePaths from './../../lib/render/resolvePaths';

describe('resolvePaths()',()=>{
  it('Should resolve the relative source and destination paths',()=>{
    const retArr = resolvePaths('./','./',false,{name:'test.pug'});
    expect(retArr[0]).toMatch(/test\.pug$/);
    expect(retArr[1]).toMatch(/test\.html$/);
  })
  it('Should resolve the relative source and destination paths dynamically.',()=>{
    const retArr = resolvePaths('./','./',true,{name:'test.pug'});
    console.log('retArr[1]:',retArr[1]);
    expect(retArr[0]).toMatch(/test\.pug$/);
    expect(retArr[1]).toMatch(/test\\test\.html$/);
  })
});