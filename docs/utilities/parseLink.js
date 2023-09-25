import { createMarkdownRenderer } from 'vitepress'

const config = globalThis.VITEPRESS_CONFIG.srcDir

const md = await createMarkdownRenderer(config.srcDir, config.markdown, config.site.base, config.logger);

export const parseLink = (str) => {
  if(!str) return str;
  str = str.replace(/\{@link\s+(.+?)\}/,'[$1](#$1)');
  return md.render(str);
}