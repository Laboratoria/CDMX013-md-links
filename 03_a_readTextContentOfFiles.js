const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
// const pathE = './holis.md';
 const pathE = './README.md';
// const pathE = 'C:/Users/ylera/Desktop/Laboratoria/learnyounodeexercises'; // solo lee archivos, este no lo lee porque es carpeta
const texto = fs.readFileSync(pathE).toString();
console.log(texto);

//  fs.readFile('README.md'); // This method will return a Buffer object containing the complete contents of the file.
// const buffer = fs.readFileSync(pathE); // This method will return a Buffer object containing the complete contents of the file.
//  console.log( buffer);
//   const buffertoString =  buffer.toString(); //this shows us what the file contents
  // console.log(buffertoString);

  //// 
// dataUrls = [
//   {href:url , // URL found
//   text: algo , // Text that appeared inside the link (<a>).
//   file: file // Path file where the link was found
// }
// ]
//  const newLinesIdentified = buffertoString.split('http'); // del array identificaremos los http, // split divide un array y devuelve uno nuevo.
//  console.log(newLinesIdentified); //this new array cut all "http"'s that were in this file
//  const counterNewLines = newLinesIdentified.length - 1; // contador de cuantas nuevas lineas hay o saltos de line \n 
//   console.log(counterNewLines); //