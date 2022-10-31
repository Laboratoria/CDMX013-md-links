const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
var path = require('path');

 const pathE = './holis.md'; //this is a constat of a  test path (ruta prueba)
// const pathE = './thumb.png'; 
// const pathE = '.C:/Users/ylera/Desktop/Laboratoria/learnyounodeexercises/my-first-io.js';
// const pathE = '.C:/Users/ylera/Desktop/Laboratoria/learnyounodeexercises';
   // getting an extension of a path
function gettinFileExtention(pathE){

    console.log(path.extname(pathE));

}

module.exports = { gettinFileExtention }
//File test run
gettinFileExtention(pathE);