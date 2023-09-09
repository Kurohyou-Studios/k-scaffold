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
  const pdocs = new Promise((res,rej) => {
      pugDoc({
      input: `lib/**/*.pug`,
      output: `./docs/data/pug.json`,
      locals:{...locals,pretty:true},
      complete:()=> res(true)
    });
  });
  // Generate jsDoc data
  const jdocs = new Promise((res,rej) => {
    exec(`jsdoc -r -X lib > docs/data/jsdoc-ast.json`,(err,stdout,stderr)=> res(true));
  });

  await Promise.all([pdocs,jdocs]);
  const pugPath = './docs/data/pug.json';
  const jsPath = './docs/data/jsdoc-ast.json';
  const [pJSON,jJSON,sJSON] = await Promise.all([
    fs.readFile(pugPath,'utf8')
      .then(string => JSON.parse(string).map(o => ({...o,output:prettifyHTML(o.output)}))),
    fs.readFile(jsPath,'utf8')
      .then(t => JSON.parse(t)),
    // Generate sass data
    sassdoc.parse('./lib',{verbose:true,package:'./package.json'})
  ]);

  const finalPJSON = {
    Mixins:pJSON.map(o => ({...o,name:o.meta.name,description:o.meta.description,properties:o.meta.arguments,example:o.meta.example.replace(/\.\.\/_k\.pug/g,'k-scaffold'),kind:'Mixin'})),
    Locals:[]
  };
  const finalBuildJSON = {Build:[]};
  const nonSheetNamespaces = ['Locals','mock20','Build','generic']
  const finalJJSON = jJSON.reduce((memo,obj) => {
    if(obj.undocumented) return memo;
    obj.properties = obj.properties ?
      stringifyJSDocProps(obj.properties) :
      stringifyJSDocProps(obj.params);
    obj.returns = stringifyJSDocProps(obj.returns);
    if(obj.memberof === 'Locals' || obj.name === 'Locals'){
      finalPJSON.Locals.push(obj);
    }else if(/build/i.test(obj.memberof) || /build/i.test(obj.name)){
      finalBuildJSON.Build.push(obj);
    }else if(
      // logic needs to be improved, this doesn't actually filter anything at the moment
    
      (obj.kind !== 'namespace' && !nonSheetNamespaces.includes(obj.namespace)) ||
      (obj.kind === 'namespace' && !nonSheetNamespaces.includes(obj.name))
    ){
      const namespace = obj.kind === 'namespace' ?
        obj.name :
        (obj.memberof || 'generic');
      memo[namespace] = memo[namespace] || [];
          
      memo[namespace].push(obj);
    }
    return memo;
  },{});
  const finalSJSON = sJSON.reduce((memo,obj) => {
    obj = {...obj,...(obj.context || {})};
    const namespace = obj.memberof || obj.type || 'generic';
    memo[namespace] = memo[namespace] || [];
    memo[namespace].push(obj);
    return memo;
  },{});
  sJSONString = JSON.stringify(finalSJSON);
  pJSONString = JSON.stringify(finalPJSON);
  jJSONString = JSON.stringify(finalJJSON);
  buildString = JSON.stringify(finalBuildJSON);
  await fs.writeFile('./docs/data/index.js',
    `
    export const scss = ${sJSONString};
    export const pug = ${pJSONString};
    export const js = ${jJSONString};
    export const build = ${buildString};`
      .replace(/^\s+/mg,'')
  );
  await Promise.all([
    fs.rm(pugPath),
    fs.rm(jsPath),
  ])
};

const stringifyJSDocProps = (properties) => {
  return !properties ?
    [] :
    properties.map(o => {
      if(o.type?.names && Array.isArray(o.type?.names)){
        o.type = o.type.names.join('|');
      }
      return o;
    })
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