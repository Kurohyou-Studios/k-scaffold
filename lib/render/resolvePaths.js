const path = require('path');

const resolvePaths = (source,destination,dynamicDestination,entry) => {
  if(!source || !destination || !entry){
    const err = new Error('K-scaffold build error. Invalid arguments.');
    throw(err);
  }
  const resSource = path.resolve(source,entry.name);
  console.log('dynamicDestination:',dynamicDestination);
  const trueDestination = destination ?
    (
      dynamicDestination ?
        `${destination}/${entry.name.replace(/\.[^.]+$/,'')}`.replace(/\/{2,}/g,'/') :
        destination
    ) :
    null;
    console.log('trueDestination:',trueDestination);
  const resDest = path.resolve(trueDestination,entry.name.replace(/\.pug$/,'.html').replace(/\.scss$/,'.css'));
  console.log('resDest',resDest);
  return [resSource,resDest];
}

module.exports = resolvePaths;