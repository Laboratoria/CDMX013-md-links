const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
const buffer = fs.readFileSync(process.argv[2]); // This method will return a Buffer object containing the complete contents of the file.

/* // verify if a file exists in node.js  /
if(fs.existsSync('./file')){
  console.log('El archivo EXISTE');
}else{
  console.log('El archivo NO EXISTE')
} */

//to work with files and directiry paths, this shows us root, dir, base, ext name, 
const path = require('path');

const pahtObj = path.parse(__filename);
console.log(path)
// 
module.exports = function mdLinks(path, options){
  return new Promise((resolve, reject) => {
    resolve([
      {
        test: '',
        file: '',
        href: ''
      }
    ])
  })
}