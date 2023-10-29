#!/usr/bin/env node
import k from './index.js';
import path from 'path';

const [,,...args] = process.argv;

const baseDir = process.cwd();
const mConfigPath = path.resolve(baseDir,'./k.config.mjs');
const mConfigURL = new URL(mConfigPath, 'file:');
const jConfigPath = path.resolve(baseDir,'./k.config.js');
const jConfigURL = new URL(jConfigPath, 'file:');
const userOpts = {};
try{
  const opts = (await import(mConfigURL.pathname.replace(/\\/g,'/')))?.default;
  Object.assign(userOpts,opts);
}catch(err){
  try{
    const opts = (await import(jConfigURL.pathname.replace(/\\/g,'/')))?.default;
    Object.assign(userOpts,opts);
  }catch(err){
    // Do nothing
  }
}
// ['source','destination','testDestination'].forEach((prop) => {
//   userOpts[prop] = userOpts[prop] ?
//     path.resolve(baseDir,userOpts[prop]) :
//     userOpts[prop];
// });

if(args.includes('--watch') || args.includes('--w')){
  userOpts.watch = true;
}

process.argv[1] = mConfigPath;
k.all(userOpts);
// console.log('k',k);

// console.log('argv',process.argv);
// console.log(import.meta.url);
// console.log(process.cwd());