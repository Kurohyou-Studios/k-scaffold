import * as fs from 'fs/promises';

import { describe,it,expect } from 'vitest';

import { k } from '../testFramework';

const htmlURL = new URL('../../test_sheet/build/compendium.test.html',import.meta.url);

describe('compendium entry mixins',()=>{
  it('Should create the compendium mixins',async ()=>{
    const html = await fs.readFile(htmlURL,'utf8');
    expect(html).toMatchSnapshot();
  })
})