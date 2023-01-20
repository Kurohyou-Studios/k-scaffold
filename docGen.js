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
      output: `docs/src/assets/data/pug.json`,
      locals,
      complete:()=> res(true)
    });
  });
  // Generate jsDoc data
  const jdocs = new Promise((res,rej) => {
    exec(`jsdoc -r -X lib > docs/src/assets/data/jsdoc-ast.json`,(err,stdout,stderr)=> res(true));
  });

  await Promise.all([pdocs,jdocs]);
  const pugPath = './docs/src/assets/data/pug.json';
  const jsPath = './docs/src/assets/data/jsdoc-ast.json';
  const [pJSON,jJSON,sJSON] = await Promise.all([
    fs.readFile(pugPath,'utf8'),
    fs.readFile(jsPath,'utf8'),
    // Generate sass data
    sassdoc.parse('./lib',{verbose:true,package:'./package.json'})
      .then(t => JSON.stringify(t))
  ]);
  await fs.writeFile('./docs/src/assets/data/index.mjs',
    `
    export const sass = ${sJSON};
    export const pug = ${pJSON};
    export const js = ${jJSON};`
      .replace(/^\s+/mg,'')  
  );
  await Promise.all([
    fs.rm(pugPath),
    fs.rm(jsPath),
  ])
};

gen();