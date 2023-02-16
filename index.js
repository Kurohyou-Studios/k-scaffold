const build = require('./lib/render');

module.exports = {
  scss:(o)=>build({...o,runSCSS:false}),
  pug:(o)=>build({...o,runPUG:false}),
  all:build
};