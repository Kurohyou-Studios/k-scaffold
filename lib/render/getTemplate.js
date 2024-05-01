const fs = require('fs/promises');
const path = require('node:path');


const kPugRoot = path.resolve(__dirname, '../../_k.pug');

const getTemplate = (filePath) => fs.readFile(filePath, 'utf8')
  .then(text => {
    const relativeRoot = path.relative(path.dirname(path.resolve(filePath)), kPugRoot);
    return text.replace(/include k-scaffold/g, `include ${relativeRoot}`)
  });

module.exports = getTemplate;