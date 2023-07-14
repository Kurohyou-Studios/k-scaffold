const path = require('path');
const fs = require('fs/promises');
const kStatus = require('./kStatus');

const renderTemplates = async (destination,sourceDir) => {
  if(!sourceDir) return;
  return Promise.all(
    Object
      .entries(destination)
      .map(async([destDir,files]) =>{
        kStatus(` Processing sheet.json and readme template for ${files[0].replace(/\..+$/,'')}`);
        const readmeTemplatePath = path.resolve(sourceDir,'readme.md');
        const jsonTemplatePath = path.resolve(sourceDir,'sheet.json');
        let readme = '';
        let sheetJSON = {};
        const sheetDestPath = path.resolve(destDir,'sheet.json');
        try{
          readme = await fs.readFile(readmeTemplatePath,'utf8')
            .then()
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
          sheetJSON.instructions = readme.replace(/\n/g,'\\n');
        }
        return fs.writeFile(sheetDestPath,JSON.stringify(sheetJSON,null,2))
      })
  );
};

module.exports = renderTemplates;