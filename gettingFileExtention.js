const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
var path = require('path');

 const pathE = './holis.md'; //this is a constat of a  test path (ruta prueba)
//const pathE = './thumb.png'; 
// const pathE = '.C:/Users/ylera/Desktop/Laboratoria/learnyounodeexercises/my-first-io.js';

 
// getting an extension of a path
function gettingFileExtention(testPath){
   
       if(path.extname(testPath)==='.md'){
        
        return(testPath)
       }else{
        return ('Tu archivo es ' + path.extname(testPath) + ' intenta con alguno que sea .md ')
       }  
 
}

module.exports = { gettingFileExtention }
//File test run
//console.log(gettingFileExtention(pathE));