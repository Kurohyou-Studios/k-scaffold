const path = require('path');

const resolvePaths = (source,destination,dynamicDestination = false,entry) => {
  if(!source || !destination || !entry){
    throw('K-scaffold build error. Invalid arguments.');
  }
  const resSource = path.resolve(source,entry.name);
  const trueDestination = destination ?
    (
      dynamicDestination ?
        `${destination}/${entry.name.replace(/\.[^.]+$/,'')}` :
        destination
    ) :
    null;
  const resDest = path.resolve(trueDestination,entry.name.replace(/\.pug$/,'.html').replace(/\.scss$/,'.css'));
  return [resSource,resDest];
}

module.exports = resolvePaths;