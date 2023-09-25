// Creates the reference data for the API documentation
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

  const finalPJSON = pJSON.reduce((memo,o) => {
    const formattedObj = {...o,name:o.meta.name,description:o.meta.description,properties:o.meta.arguments,example:o.meta.example.replace(/\.\.\/_k\.pug/g,'k-scaffold'),kind:'Mixin',memberof:o.meta.memberof || 'Mixin'};
    memo[formattedObj.memberof || formattedObj.kind] = memo[formattedObj.memberof || formattedObj.kind] || [];
    memo[formattedObj.memberof || formattedObj.kind].push(formattedObj);
    return memo;
  },{});
  const finalBuildJSON = {Build:[]};
  const nonSheetNamespaces = ['Locals','mock20','Build','generic','Render']
  const finalJJSON = jJSON.reduce((memo,obj) => {
    if(obj.undocumented) return memo;
    obj.properties = obj.properties ?
      stringifyJSDocProps(obj.properties) :
      stringifyJSDocProps(obj.params);
    obj.returns = stringifyJSDocProps(obj.returns);
    if(obj.memberof === 'Locals' || obj.name === 'Locals'){
      finalPJSON.Locals = finalPJSON.Locals || [];
      finalPJSON.Locals.push(obj);
    }else if(/build/i.test(obj.memberof) || /build/i.test(obj.name)){
      finalBuildJSON.Build.push(obj);
    }else{
      const namespace = obj.kind === 'namespace' ?
        obj.name :
        (obj.memberof || 'generic');
      if(!nonSheetNamespaces.includes(namespace)){
        memo[namespace] = memo[namespace] || [];
            
        memo[namespace].push(obj);
      }
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
  Object.values(finalPJSON).forEach(arr => 
    arr.sort((a,b) => a.name?.localeCompare(b.name)));
  Object.values(finalBuildJSON).forEach(arr => 
    arr.sort((a,b) => a.name?.localeCompare(b.name)));
  Object.values(finalJJSON).forEach(arr => 
    arr.sort((a,b) => a.name?.localeCompare(b.name)));
  Object.values(finalSJSON).forEach(arr => 
    arr.sort((a,b) => a.name?.localeCompare(b.name)));
  const sCatOrder = Object.keys(finalSJSON).sort((a,b) =>
    a.localeCompare(b));
  const pCatOrder = Object.keys(finalPJSON).sort((a,b) =>
    a.localeCompare(b));
  const jCatOrder = Object.keys(finalJJSON).sort((a,b) =>
    a.localeCompare(b));
  const bCatOrder = Object.keys(finalBuildJSON).sort((a,b) =>
    a.localeCompare(b));

  const orderedSJSON = sCatOrder.reduce((obj,key) =>{
    obj[key] = finalSJSON[key];
    return obj;
  },{});
  const orderedPJSON = pCatOrder.reduce((obj,key) =>{
    obj[key] = finalPJSON[key];
    return obj;
  },{});
  const orderedJJSON = jCatOrder.reduce((obj,key) =>{
    obj[key] = finalJJSON[key];
    return obj;
  },{});
  const orderedBuildJSON = bCatOrder.reduce((obj,key) =>{
    obj[key] = finalBuildJSON[key];
    return obj;
  },{});
  sJSONString = JSON.stringify(orderedSJSON);
  pJSONString = JSON.stringify(orderedPJSON);
  jJSONString = JSON.stringify(orderedJJSON);
  buildString = JSON.stringify(orderedBuildJSON);
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
}

gen();