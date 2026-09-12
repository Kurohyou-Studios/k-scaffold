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

/**
 * Builds the same test bundle k-build writes to testDestination (mock20 + the sheet's
 * generated script + mockScaffold) for a pug snippet, writes it under `outDir`, and imports it.
 * The bundle exposes the mock20 environment and the sheet's `k` object.
 */
export const buildFramework = async (template, outDir, translation = {}) => {
  const fs = await import('fs/promises');
  const { JSDOM } = await import('jsdom');
  const { pathToFileURL } = await import('url');
  const outputTests = (await import('../../lib/render/outputTests')).default;
  const { html } = renderK(template);
  const { document } = new JSDOM(html).window;
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, 'translation.json'), JSON.stringify(translation));
  await outputTests(document, outDir);
  return import(/* @vite-ignore */ `${pathToFileURL(path.join(outDir, 'testFramework.js')).href}?t=${Date.now()}`);
};
