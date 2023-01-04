import * as fs from 'fs/promises';

import { describe,it,expect } from 'vitest';

import { k } from '../testFramework';

const htmlURL = new URL('../../test_sheet/build/selects.test.html',import.meta.url);

describe('selects entry mixins',()=>{
  it('Should create the selects mixins',async ()=>{
    const html = await fs.readFile(htmlURL,'utf8');
    expect(html).toMatchSnapshot();
  })
})