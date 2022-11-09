const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
var path = require('path');
const pathdeprueba = './README.md';
// './holis.md'; //  './thumb.png';   //const pathdeprueba = 'C:/Users/ylera/Desktop/Laboratoria/learnyounodeexercises';

const { checkingExistentPath }= require('./checkingExistentPath.js');
const { resolvePath }  = require('./resolvePath.js');
const { answerFileOrDirectory } = require('./answerFileOrDirectory');
const { gettingFileExtention } = require('./gettingFileExtention.js');
const { gettingLinks } = require('./gettingLinks.js');
const { validate } = require('./validate.js');
//(time < 18) ? "Good day." : "Good evening.";
let absolutePath;
let mdFile; 

// ? (absolutePath = resolvePath(pathdeprueba)) : 'El archivo no existe';
answerFileOrDirectory(absolutePath) ? 'es directorio ' : (mdFile = gettingFileExtention(absolutePath));
gettingLinks

//ejecucion de preuba
//getMdLinks(pathdeprueba);


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