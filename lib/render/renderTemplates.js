const path = require('path');
const fs = require('fs/promises');
const kStatus = require('./kStatus');

const renderTemplates = async (destination,sourceDir) => {
  if(!sourceDir) return;
  return Promise.all(
    Object
      .entries(destination)
      .map(async([destDir,files]) =>{
        const readmeTemplatePath = path.resolve(sourceDir,'readme.md');
        const jsonTemplatePath = path.resolve(sourceDir,'sheet.json');
        let readme = '';
        let sheetJSON = {};
        const sheetDestPath = path.resolve(destDir,'sheet.json');
        let origJSON;
        try {
          origJSON = await fs.readFile(sheetDestPath,'utf8')
            .catch(e => e);
        } catch (error) {
          // Do nothing
        }
        try{
          readme = await fs.readFile(readmeTemplatePath,'utf8')
            .catch(e => e);
        }catch(err){
          // Do nothing
        }
        try{
          sheetJSON = await fs.readFile(jsonTemplatePath,'utf8')
            .then(t => JSON.parse(t))
            .catch(e => ({}));
        }catch(err){
          // Do nothing
        }
        sheetJSON.legacy = false;
        files.forEach(file => {
          const [fileName,fileType] = file.match(/.+?\.(.+)$/);
          sheetJSON[fileType.toLowerCase()] = fileName;
        });
        sheetJSON.preview = sheetJSON.preview ||
          sheetJSON.html.replace(/\.html/,'.jpg');
        if(readme){
          sheetJSON.instructions = readme;
        }
        const sheetStringified = JSON.stringify(sheetJSON,null,2)
        if(origJSON && origJSON === sheetStringified){
          kStatus(` sheet.json unchanged for ${files[0].replace(/\..+$/,'')}`);
          return origJSON;
        }else{
          kStatus(` Processing sheet.json and readme template for ${files[0].replace(/\..+$/,'')}`);
          return fs.writeFile(sheetDestPath,sheetStringified)
        }
      })
  );
};

module.exports = renderTemplates;