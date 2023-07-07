/**
 * The build functionality used by the CLI and API build interfaces.
 * @namespace Build
 */
const watchSheet = require('./watch');
const processSheet = require('./processSheet');

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
 * @returns {Promise<array[]>} - Array containing all rendered HTML text in an array at index 0 and all rendered CSS text at index 1.
 */
const build = async ({source ='./',destination,dynamicDestination,testDestination,pugOptions={suppressStack:true},scssOptions={},watch=false,translationTemplate}) => {
  const [html,css] = await processSheet({source,destination,dynamicDestination,testDestination,pugOptions,scssOptions,translation});
  if(watch){
    return watchSheet({source,destination,dynamicDestination,testDestination,pugOptions,scssOptions,translation});
  }else{
    return [html,css];
  }
};

module.exports = build;