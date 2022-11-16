const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
const path = require('path');
const pathE = './holis.md'; //this is a constat of a  test path (ruta prueba)

// to manage absolute paths you can use '/' or '\\' but NOT '\'
function resolvePath(pathE) {
let absolutePath = pathE;

  if(path.isAbsolute(pathE)){
    // const absolutePath2 = absolutePath.replace('\','/');
    return absolutePath;
  }else if (!path.isAbsolute(pathE)) { // if it's not absolute
    absolutePath = path.resolve(pathE);
    return absolutePath  // become in absolute
  }
  
}

module.exports = { resolvePath }

console.log(resolvePath('C:\Users\ylera\Desktop\Labo2\CDMX013-md-links\holis.md'));