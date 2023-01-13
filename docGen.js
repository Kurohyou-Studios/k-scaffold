const docPath = `./docs`;

// NPM modules
const { exec } = require(`child_process`);
const fs = require('fs/promises');
const pugDoc = require('pug-doc');
const sassdoc = require('sassdoc');
const markdown = require(`markdown`).markdown;

const locals = require('./lib/render/locals');

const gen = async ()=>{
  // generate pug data
  const pdocs = new Promise((res,rej) => {
      pugDoc({
      input: `lib/**/*.pug`,
      output: `docs/data/pug.json`,
      locals,
      complete:()=> res(true)
    });
  });
  // Generate jsDoc data
  const jdocs = new Promise((res,rej) => {
    exec(`jsdoc -r -X lib > docs/data/jsdoc-ast.json`,(err,stdout,stderr)=> res(true));
  });

  await Promise.all([pdocs,jdocs]);
  // Generate sass data
  const sJSON = await sassdoc.parse('./lib',{verbose:true,package:'./package.json'});
  await fs.writeFile('./docs/data/sass.json',JSON.stringify(sJSON,null,2));
};

gen();