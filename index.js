const build = require('./lib/render');
const sass = require('sass-embedded');

module.exports = {
  scss: (o) => build({ ...o, runSCSS: false }),
  pug: (o) => build({ ...o, runPUG: false }),
  all: build,
  sass
};