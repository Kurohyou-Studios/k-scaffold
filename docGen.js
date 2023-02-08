const docPath = `./docs`;

// NPM modules
const { exec } = require(`child_process`);
const fs = require('fs/promises');
const pugDoc = require('pug-doc');
const sassdoc = require('sassdoc');

const locals = require('./lib/render/locals');

const gen = async ()=>{
  locals.resetObjs();
  // generate pug data
  console.log('locals',locals);
  const pdocs = new Promise((res,rej) => {
      pugDoc({
      input: `lib/**/*.pug`,
      output: `doc-source/src/assets/data/pug.json`,
      locals:{...locals,pretty:true},
      complete:()=> res(true)
    });
  });
  // Generate jsDoc data
  const jdocs = new Promise((res,rej) => {
    exec(`jsdoc -r -X lib > doc-source/src/assets/data/jsdoc-ast.json`,(err,stdout,stderr)=> res(true));
  });

  await Promise.all([pdocs,jdocs]);
  const pugPath = './doc-source/src/assets/data/pug.json';
  const jsPath = './doc-source/src/assets/data/jsdoc-ast.json';
  const [pJSON,jJSON,sJSON] = await Promise.all([
    fs.readFile(pugPath,'utf8')
      .then(string => JSON.stringify(JSON.parse(string).map(o => ({...o,output:prettifyHTML(o.output)})))),
    fs.readFile(jsPath,'utf8'),
    // Generate sass data
    sassdoc.parse('./lib',{verbose:true,package:'./package.json'})
      .then(t => JSON.stringify(t))
  ]);
  console.log('pJSON',pJSON);
  await fs.writeFile('./doc-source/src/assets/data/index.mjs',
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

const applyIndent = (indent,newLine) => {
  return newLine ?
    `${newLine}${[...Array(Math.max(0,indent)).keys()].map(n => '  ').join('')}` :
    '';
};

const prettifyHTML = (html) => {
  let indent = 0;
  return html
    .split('')
    .reduce((m,c,i,a) => {
      // Look for starts of non self closing
      let newLine = '\n';
      if(m.endsWith('>')){
        if(!/(?:\/[a-z]*?|--)>$/.test(m)){
          if(a[i+1] !== '/' && a[i+1] !== '!'){
            indent++;
          }else{
            if(a[i+1] === '/'){
              newLine = '';
            }
          }
        }else if(/\/[a-z]*>$/.test(m)){
          newLine = '\n';
          if(a[i+1] === '/'){
            indent--;
          }
        }
        m += `${applyIndent(indent,newLine)}`;
      }else if(`${c}${a[i+1]}` === '</'){
        indent--;
        m += `${applyIndent(indent,newLine)}`;
      }
      m += c;
      return m;
    },'');
  // return html.replace(/((?:\/[a-z]*|--)?>)(<(?:\/|--)?)/g,(match,start,end)=>{
  //   if(!start.startsWith('/') && !start.startsWith('-') && !start.startsWith('!')){
  //     indent++;
  //   }
  //   if(end.length > 1){
  //     indent--;
  //   }
  //   let line = !start.startsWith('/') && /^<\//.test(end) ?
  //     '' :
  //     '\n';
  //   let spacing = line ?
  //     [...Array(Math.max(0,indent)).keys()].map(n => '  ').join('') :
  //     '';
  //   return `${start}${line}${spacing}${end}`;
  // });
}

gen();