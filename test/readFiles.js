const fs = require('node.fs');
const path = require('path');

const readArchivo = (directoryPath) => {
    let extractLinks = fs.readFileSync(directoryPath, 'utf-8').match(/\[(.+)\]\((https?:\/\/.+)\)/gi);
console.log(extractLinks);
  let result= extractLinks.map((link) => {
  let obj = {
    href : '',
    text : '',
    file : directoryPath,
  }
 return obj;
});    
 console.log(result);
 return extractLinks; 
}

module.exports = {
  readArchivo
}