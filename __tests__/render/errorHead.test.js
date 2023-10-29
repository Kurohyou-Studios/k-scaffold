import { describe, it, expect, vi } from 'vitest';
import kErrorHead from './../../lib/render/errorHead';
import '../mocks';

describe('kErrorhead',()=>{
  it('Should log the provided error',()=>{
    kErrorHead('test');
    expect(console.log.mock.calls[0][0]).toMatch('test');
  })
})