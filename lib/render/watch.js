const watch = require('node-watch');

const processSheet = require('./processSheet');

const kWatch = (argObj) => {
  watch(argObj.source, 
    {
      recursive: true,
      filter(f, skip) {
        // Basic watch call adapted from node-watch docs
        // skip node_modules
        if (/\/node_modules/.test(f)) return skip;
        // skip .git folder
        if (/\.git/.test(f)) return skip;
        // Skip generated test framework
        if(/testFramework\.js|\.(?:test|mock)\.js/.test(f)) return skip;
        // only watch for valid sheet files (js, scss, pug)
        return /\.(js|pug|scss|kscaf|json)$/i.test(f);
      }
    },
    async (evt,name)=>{
      console.log('node-watch name',name);
      const runSCSS = name.endsWith('.scss');
      const runPUG = /\.(?:js|pug|kscaf|json)$/i.test(name);

      if( !runSCSS && !runPUG ) return;
      const toRun = argObj.sfc ?
        {runSCSS:true, runPUG:true} :
        {runSCSS,runPUG};
      await processSheet({...argObj,...toRun});
    });
};

module.exports = kWatch;