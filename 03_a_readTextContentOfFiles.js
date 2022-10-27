const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
const pathE = './holis.md';
// const pathE = './README.md';
// const pathE = 'C:/Users/ylera/Desktop/Laboratoria/learnyounodeexercises'; // solo lee archivos, este no lo lee porque es carpeta
const texto = fs.readFileSync(pathE).toString();
console.log(texto);

 const regex = /(\[.*\])(\(https?(:\/\/[^\s\)]+)\))/g
//const regex = /(\[.*\])/g
const allLinks = texto.match((regex))
console.log('all linksd', allLinks)
//  console.log( "hola esto es un string [texto de link](http://youtube.com) otro texto aca [texto otro link](http://facebook.com)".match((regex)))
  console.log(regex.exec("[texto de link](http://youtube.com)"))


  //// 
// dataUrls = [
//   {href:url , // URL found
//   text: algo , // Text that appeared inside the link (<a>).
//   file: file // Path file where the link was found
// }
// ]
