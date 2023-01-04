import * as fs from 'fs/promises';

import { describe,it,expect } from 'vitest';

import { k } from '../testFramework';

const htmlURL = new URL('../../test_sheet/build/tabs.test.html',import.meta.url);

describe('tabs entry mixins',()=>{
  it('Should create the tabs mixins',async ()=>{
    const html = await fs.readFile(htmlURL,'utf8');
    expect(html).toMatchSnapshot();
  })
})