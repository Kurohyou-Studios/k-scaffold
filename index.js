const build = require('./lib/render');

module.exports = {
  scss: (o) => build({ ...o, kRequire: require, runSCSS: false }),
  pug: (o) => build({ ...o, kRequire: require, runPUG: false }),
  all: (args) => build({ ...args, kRequire: require })
};