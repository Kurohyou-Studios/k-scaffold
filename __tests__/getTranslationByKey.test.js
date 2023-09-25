import { describe,it,expect } from 'vitest';
import { k,environment } from './testFramework';

describe('k.getTranslationByKey',() => {
  describe('Key not found',() => {
    it('Should return the key if no value found',() => {
      const translate = k.getTranslationByKey('non existent key');
      expect(translate).toBe('non existent key')
    });
    it('When array of variables passed, should return the key with the variables substituted in',() => {
      const translate = k.getTranslationByKey('non existent key with {{0}}',['variables']);
      expect(translate).toBe('non existent key with variables');
    })
  })
  describe('Existing Key',() => {
    it('Should return the value for the key',() => {
      environment.translation.testKey = 'Test Key found';
      console.warn('translation',environment.translation);
      const translate = k.getTranslationByKey('testKey');
      expect(translate).toBe('Test Key found');
    })
    it('When array of variables passed, should return the value with the variables substitued in',() => {
      const key = 'test key with {{variables}}';
      environment.translation[key] = 'Test Key found with {{0}}';
      const translate = k.getTranslationByKey(key,['variables']);
      expect(translate).toBe('Test Key found with variables');
    })
  })
})