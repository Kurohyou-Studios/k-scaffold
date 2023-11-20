/**
 * The build functionality used by the CLI and API build interfaces.
 * @namespace Build
 */
const watchSheet = require('./watch');
const processSheet = require('./processSheet');
/**
 * The render functions, not to be documented for public use
 * @namespace Render
 */
/**
 * Renders PUG and SCSS into HTML and CSS text
 * @memberof Build
 * @alias all
 * @param {string} source - The path to the directory containing your PUG and SCSS files
 * @param {string} destination - The relative path to the directory where you want your HTML and CSS files to be created.
 * @param {boolean} [dynamicDestination = false] - Whether the generator should create dynamically named folders inside the destination based on the master pug/scss file names, (e.g. my_system.pug and my_system.scss with a destination of `./build` will create /build/my_system/my_system.html, /build/my_system/my_system.css, and /build/my_system/translation.js). This is useful if building a sheet template that is going to be used for several different projects.
 * @param {object} [pugOptions] - Options for how the k-scaffold should parse the pug and options that should be passed to pugjs. Accepts all options specified at pugjs.org. To be explicit as the pugjs docs are obtuse on this point, you may pass any local variables/functions that you want to have access to in your pug via this object. In addition you may pass:
 * @param {boolean} [pugOptions.suppressStack = true] - Whether the K-scaffold should suppress the full error stack from pug and only display the message portion of the error. The stack traces provided by pug do not refer to the actual chain of included pug files, and so are usually useless in troubleshooting an issue.
 * @param {object} [scssOptions = {}] - Options for how the k-scaffold should parse the SCSS and options that should be passed to SASS. Accepts all options specified at sass-lang.com.
 * @param {string} [templates] - A directory that contains the template files for translation.json, sheet.json, and readme. Template translation file should be named translation.json just like the build version of the translation file.
 * @returns {Promise<array[]>} - Array containing all rendered HTML text in an array at index 0, all rendered CSS text at index 1, and rendered sheet.json at index 2.
 */
const build = async ({source ='./',destination,dynamicDestination,testDestination,pugOptions={suppressStack:true},scssOptions={},watch=false,templates,sfc}) => {
  const [html,css,json] = await processSheet({source,destination,dynamicDestination,testDestination,pugOptions,scssOptions,templates});
  if(watch){
    return watchSheet({source,destination,dynamicDestination,testDestination,pugOptions,scssOptions,templates,sfc});
  }else{
    return [html,css,json];
  }
};

module.exports = build;