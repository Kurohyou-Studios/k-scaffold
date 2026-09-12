import path from 'path';
import { fileURLToPath } from 'url';
import pug from 'pug';

import locals from '../../lib/render/locals';

const testsDir = path.dirname(fileURLToPath(import.meta.url));

/**
 * Renders a pug snippet through the k-scaffold locals exactly as k-build does,
 * with `include k-scaffold` already resolved. Returns the html and the locals
 * state (varObjects/k) left behind by the render so tests can inspect the cascade.
 */
export const renderK = (template) => {
  locals.resetObjs();
  const html = pug.render(`include ../../_k.pug\n${template}`, {
    pretty: true,
    ...locals,
    filename: path.join(testsDir, 'virtual.pug'),
  });
  return { html, varObjects: locals.varObjects, k: locals.k };
};

/**
 * Pulls a `const NAME = {...};` JSON literal that +kscript emitted into the sheetworker script.
 */
export const extractScriptConst = (html, name) => {
  const match = html.match(new RegExp(`const ${name} = (.+?);\n`));
  if (!match) throw new Error(`No const ${name} found in rendered script`);
  return JSON.parse(match[1]);
};
