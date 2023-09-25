import { createMarkdownRenderer } from 'vitepress'

import { pug, js, scss, build } from './data'


const config = globalThis.VITEPRESS_CONFIG
const md = await createMarkdownRenderer(config.srcDir, config.markdown, config.site.base, config.logger);

export const parseLink = (str) => {
  if(!str) return str;
  str = str.replace(/\{@link\s+(.+?)\}/g,'[$1](#$1)');
  return md.render(str);
}

export default {
  load(watchedFiles) {
    const truePug = Object.entries(pug).reduce((memo,[namespace,nameContent]) => {
      memo[namespace] = nameContent.map(c => {
        const trueC = JSON.parse(JSON.stringify(c));
        trueC.description = parseLink(trueC.description);
        trueC.properties?.forEach(o => {
          o.description = parseLink(o.description);
        });
        return trueC;
      })
      return memo;
    },{});

    const trueJS = Object.entries(js).reduce((memo,[namespace,nameContent]) => {
      memo[namespace] = nameContent.map(c => {
        const trueC = JSON.parse(JSON.stringify(c));
        trueC.description = parseLink(trueC.description);
        trueC.properties?.forEach(o => {
          o.description = parseLink(o.description);
        })
        trueC.examples = trueC.examples?.map(s => s.replace(/\r/g,'\n'))
        return trueC;
      })
      return memo;
    },{});

    const trueSCSS = Object.entries(scss).reduce((memo,[namespace,nameContent]) => {
      memo[namespace] = nameContent.map(c => {
        const trueC = JSON.parse(JSON.stringify(c));
        trueC.description = parseLink(trueC.description);
        trueC.properties?.forEach(o => {
          o.description = parseLink(o.description);
        })
        if(trueC.code){
          const [,leadingSpaces] = trueC.code.match(/^\n?(\s+)/) || [];
          if(leadingSpaces){
            trueC.code = trueC.code
              .replace(/^\n+/,'')
              .replace(new RegExp(`^${leadingSpaces}`,'gm'),'');
          }
        }
        return trueC;
      })
      return memo;
    },{});

    const trueBuild = Object.entries(build).reduce((memo,[namespace,nameContent]) => {
      memo[namespace] = nameContent.map(c => {
        const trueC = JSON.parse(JSON.stringify(c));
        trueC.description = parseLink(trueC.description);
        trueC.properties?.forEach(o => {
          o.description = parseLink(o.description);
        })
        return trueC;
      });
      return memo;
    },{});
    return { pug:truePug, js:trueJS, scss:trueSCSS, build:trueBuild }
  }
}

// export default {
//   load(watchedFiles) {
//     return { pug, js, scss, build }
//   }
// }