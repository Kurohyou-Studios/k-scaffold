import * as fs from 'fs/promises';
import * as path from 'path';

import { describe, it, expect } from 'vitest';

const cssURL = new URL('./../test_sheet/build/K-scaffold_Tester.css',import.meta.url);
const htmlURL = new URL('./../test_sheet/build/K-scaffold_Tester.html',import.meta.url);
const jsURL = new URL('./testFramework.js',import.meta.url);
const translationURL = new URL('./../test_sheet/build/translation.json',import.meta.url)

describe('k.build',()=>{
  it('Should generate the css file from scss', async ()=>{
    const css = await fs.readFile(cssURL,'utf8');
    expect(css).toBeDefined();
  });
  it('Should generate the html file from the pug and js', async ()=>{
    const html = await fs.readFile(htmlURL,'utf8');
    expect(html).toBeDefined();
  });
  it('Should generate the translation file from the i18n entries',async ()=>{
    const translation = await fs.readFile(translationURL,'utf8').then(d => JSON.parse(d));
    expect(translation).toBeDefined();
  })
  it('Should generate the testFramework.js for tests', async ()=>{
    const js = await fs.readFile(jsURL,'utf8');
    expect(js).toBeDefined();
  });
});