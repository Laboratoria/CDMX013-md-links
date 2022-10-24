const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
const pathE = './holis.md';
  // verify if a file exists in node.js  //done
if(fs.existsSync(pathE)){
  console.log('El archivo EXISTE');
}else{
  console.log('El archivo NO EXISTE')
}


  