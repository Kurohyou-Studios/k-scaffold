import { describe,it,expect } from 'vitest';
import { k } from './testFramework';

const unescapedString = 'Some string';
const escapedString = k.escape(unescapedString);
const unescapedObject = {test:'data'};
const escapedObject = k.escape(unescapedObject);

describe('RE.escape',()=>{
  it('Should base64 escape a string',()=>{
    expect(escapedString).toMatchInlineSnapshot('"KSTRINGU29tZSBzdHJpbmc="');
  });
  it('Should base64 escape an object',()=>{
    expect(escapedObject).toMatchInlineSnapshot('"KDATAeyJ0ZXN0IjoiZGF0YSJ9"');
  });
});
describe('RE.unescape',()=>{
  it('Should return the passed string if it is not encoded',()=>{
    expect(k.unescape(unescapedString)).toBe(unescapedString);
  });
  it('Passing an object should return the object',()=>{
    expect(k.unescape(unescapedObject)).toBe(unescapedObject);
  });
  it('Should base64 escape a string',()=>{
    expect(k.unescape(escapedString)).toStrictEqual(unescapedString);
  });
  it('Should base64 escape an object',()=>{
    expect(k.unescape(escapedObject)).toStrictEqual(unescapedObject);
  });
});