const path = require('path');
const fs = require('fs/promises');
const jsdom = require('jsdom');
const { translate } = require('i18nreplacer');

const { JSDOM } = jsdom;

const outputTests = require('./outputTests');

const outputPug = async (html,destination,testDestination,templates) => {
  if(!destination) return;
  const dom = new JSDOM(html);
  const { window } = dom;
  const { document } = window;

  const sfcStyle = [...document.getElementsByClassName('scf-styles')];
  const sfcStyles = {};
  sfcStyle.forEach(style => {
    const scopes = ['roll','sheet'].filter(scope => 
      style.id.includes(`scf-${scope}`));
    scopes.forEach(scope => {
      sfcStyles[scope] = sfcStyles[scope] || [];
      sfcStyles[scope].push(style.textContent);
    });
  });
  Object.keys(sfcStyles).forEach(key => {
    sfcStyles[key] = sfcStyles[key].join('\n');
  });
  html = html.replace(/<scf(?:.|\s)+?<\/scf>/g,'');

  await fs.writeFile(destination,html);
  console.log(`HTML written to ${destination}`);
  if(testDestination){
    await outputTests(document,testDestination);
  }
  
  // handling for list items
  const i18nSubTypes = ['-list'];
  const translations = i18nSubTypes.reduce((memo,type)=>{
    const transElems = [...document.querySelectorAll(`[data-i18n${type}]`)];
    const baseType = type.replace(/^-/,'');
    transElems.forEach(el => {
      if(type === '-list'){
        const listArr = [];
        const items = [...el.querySelectorAll('[data-i18n-list-item]')];
        items.forEach(item => {
          if(item.dataset['i18nListItem']){
            listArr.push(item.dataset['i18nListItem']);
          }
        });
        memo[el.dataset['i18nList']] = listArr.filter(s => s && s.trim()).join(',');
      }else{
        const datasetType = baseType.replace(/^./,(match) => match.toUpperCase());
        memo[el.dataset[`i18n${datasetType}`]] = (
            type ?
              el.getAttribute(baseType) :
              el.textContent?.trim()
          ) ||
          el.dataset[`i18n${datasetType}`];
      }
    });
    return memo;
  },translate(html));
  if(translations){
    const transPath = path.resolve(path.dirname(destination),'translation.json');
    const templatePath = templates ?
      path.resolve(templates,'translation.json') :
      null;
    let origTrans = '';
    try {
      origTrans = await fs.readFile(transPath,'utf8');
    } catch (error) {
      // do nothing
    }
    const currTranslation = await (
        templatePath ?
          fs.readFile(templatePath,'utf8') :
          new Promise(res => res(origTrans))
      )
        .then(t => JSON.parse(t))
        .catch( e => {return {}});
    const toUse = {...translations,...currTranslation};
    const stringTranslation = JSON.stringify(toUse,null,2);
    if(!origTrans || origTrans !== stringTranslation){
      await fs.writeFile(transPath,stringTranslation);
      if(testDestination){
        const testTransPath = path.resolve(testDestination,'translation.json')
        await fs.writeFile(testTransPath,stringTranslation);
      }
    }
  }
  return sfcStyles;
};

module.exports = outputPug;