const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
const pathE = './holis.md';
  // verify if a file exists in node.js  //done
if(fs.existsSync(pathE)){
  console.log('El archivo EXISTE');
}else{
  console.log('El archivo NO EXISTE')
}

//  fs.readFile('README.md'); // This method will return a Buffer object containing the complete contents of the file.
const buffer = fs.readFileSync(pathE); // This method will return a Buffer object containing the complete contents of the file.
//  console.log( buffer);
const buffertoString =  buffer.toString(); //this shows us what the file contents
  console.log(buffertoString);

  