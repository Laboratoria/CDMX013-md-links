// const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
// //  fs.readFile('README.md'); // This method will return a Buffer object containing the complete contents of the file.
//  const buffer = fs.readFileSync('holis.md'); // This method will return a Buffer object containing the complete contents of the file.
//  //  console.log( buffer);
//  const buffertoString =  buffer.toString(); //this shows us what the file contents
//     console.log(buffertoString);
//  const newLinesIdentified = buffertoString.split('http'); // del array identificaremos los http, // split divide un array y devuelve uno nuevo.
//   // console.log(newLinesIdentified); //this new array cut all "http"'s that were in this file
//  const counterNewLines = newLinesIdentified.length - 1; // contador de cuantas nuevas lineas hay o saltos de line \n 
  // console.log(counterNewLines); //

 //to work with files and directiry paths, this shows us root, dir, base, ext name, 
//  const path = require('path');
//  const pathObj = path.parse(__filename);
// //  const path = 'C:/Users/ylera/Desktop/Labo2/CDMX013-md-links';
//  console.log(path)

// // to get each ext
// console.log(path.extname('./README.md'))
// // returns '.html'

// // verify if a file exists in node.js  //done
// if(fs.existsSync('./README.md')){
//   console.log('El archivo EXISTE');
// }else{
//   console.log('El archivo NO EXISTE')
// }

 
/* module.exports = function mdLinks(path, options){
  return new Promise((resolve, reject) => {
    resolve([
      {
        test: '',
        file: '',
        href: ''
      }
    ])
  })
} */


function getMdLinks(path){
  //identificar si la ruta es absoluta ..... etc... -> resolvepath

  //hacer la lectura qarchivos que son md, ....

  //identificar las url.....

  //condensar toda ladta para retornarla ...
}


//ejecucion de preuba
getMdLinks('pathdeprueba')