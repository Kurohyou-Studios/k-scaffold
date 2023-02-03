import { describe, it, expect, vi } from 'vitest';

import { fsSpy } from '../mocks';

import getTemplate from '../../lib/render/getTemplate';

describe('getTemplate()',()=>{
  it('Should read the file and replace k-scaffold includes with full path',async ()=>{

    const spy = fsSpy.readFile(
      `include k-scaffold
+tabs({})`
    );
    
    const temp = await getTemplate('./mock/path');
    expect(temp).toMatchInlineSnapshot('"include /node_modules/@kurohyou/k-scaffold/_k.pug\n+tabs({})"');
  })
});