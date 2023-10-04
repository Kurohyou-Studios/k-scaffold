const path = require('path');

const resolvePaths = (source,destination,dynamicDestination,entry) => {
  if(!source || !destination || !entry){
    const err = new Error('K-scaffold build error. Invalid arguments.');
    throw(err);
  }
  const resSource = path.resolve(source,entry.name);
  const trueDestination = destination ?
    (
      dynamicDestination ?
        `${destination}/${entry.name.replace(/\.[^.]+$/,'')}`.replace(/\/{2,}/g,'/') :
        destination
    ) :
    null;
  const resDest = path.resolve(trueDestination,entry.name.replace(/\.(pug)$/,'.html').replace(/\.scss$/,'.css'));
  return [resSource,resDest];
}

module.exports = resolvePaths;