const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
var path = require('path');

const checkingExistentPath = require('./functionsMD.js');

 const pathdeprueba = './README.md';
 // './holis.md'; //  './thumb.png';   //const pathdeprueba = 'C:/Users/ylera/Desktop/Laboratoria/learnyounodeexercises';

function getMdLinks(TestPath) {
  // 01_a Verify if a file exists in node.js
  checkingExistentPath(TestPath);
  //identificar si la ruta es absoluta ..... etc... -> resolvepath

  //hacer la lectura qarchivos que son md, ....
  // answerFileOrDirectory(pathE);
  //identificar las url.....

  //condensar toda ladta para retornarla ...
}


//ejecucion de preuba
getMdLinks(pathdeprueba);


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