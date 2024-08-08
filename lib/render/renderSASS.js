const sass = require('sass-embedded');
const path = require('path');
const fs = require('fs/promises');
const { pathToFileURL } = require('url');

const kErrorHead = require('./errorHead');

/**
 * Renders SCSS into CSS text
 * @memberof Render
 * @param {string} source - The path to the file you want to parse as SCSS.
 * @param {string} destination - The path to the file where you want to store the rendered CSS.
 * @param {object} [options = {}] - Options for how the k-scaffold should parse the SCSS and options that should be passed to SASS. Accepts all options specified at sass-lang.com.
 * @returns {Promise<string|null>} - The rendered css or null if an error occurred
 */
const renderSASS = async ({source,destination,options={},sfcStyles={},sfcFonts=[]}) => {
  try{
    const dirname = path.dirname(process.argv[1] || '');
    const compileOptions = {
      charset:false,
      importers: [
        {
          findFileUrl(url) {
            if(!url.startsWith('k-scaffold')) return null;
            const fileURL = pathToFileURL(path.resolve(__dirname,'../..'),url.substring(10));
            const newURL = new URL(fileURL);
            return newURL;
          }
        },
        {
          canonicalize(url) {
            if(url !== 'sfc') return null;
            const fileURL = pathToFileURL(path.resolve(dirname,`/${url}.scss`),url.substring(10));
            return new URL(fileURL);
          },
          load(canonicalUrl){
            return {
              contents:
`@use 'k-scaffold' as k;
@mixin sheet {${sfcStyles.sheet || '/*No sheet sfc used*/'}}
@mixin roll {${sfcStyles.roll || '/*No roll sfc used*/'}}`,
              syntax: 'scss'
            }
          }
        },
        {
          canonicalize(url) {
            if(url !== 'googleFont') return null;
            const fileURL = pathToFileURL(path.resolve(dirname,`/${url}.scss`),url.substring(10));
            return new URL(fileURL);
          },
          load(canonicalUrl){
            return {
              contents:
`@import url("https://fonts.googleapis.com/css?family=Material+Icons|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200${
              sfcFonts.length ?
                `|${sfcFonts.join('|')}`:
                ''
}&display=swap");`,
              syntax: 'scss'
            }
          }
        }
      ]
    };
    const currOptions = {...options};
    if(currOptions.importers){
      compileOptions.importers.push(...currOptions.importers);
      delete currOptions.importers;
    }
    Object.assign(compileOptions,currOptions);

    const {css} = await sass.compileAsync(source,compileOptions);
    if(destination){
      await fs.writeFile(destination,css);
      console.log(`CSS written to ${destination}`);
    }

    return css
  }catch(err){
    
    kErrorHead('SCSS PARSE ERROR');
    if(options.suppressStack){
      console.error(err.message)
    }else{
      console.error(err);
    }
    return null;
  }
};

module.exports = renderSASS;