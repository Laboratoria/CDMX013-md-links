const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
var path = require('path');

 const pathE = './holis.md'; //this is a constat of a  test path (ruta prueba)
//const pathE = './thumb.png'; 
// const pathE = '.C:/Users/ylera/Desktop/Laboratoria/learnyounodeexercises/my-first-io.js';
// const pathE = '.C:/Users/ylera/Desktop/Laboratoria/learnyounodeexercises';
   // getting an extension of a path
function gettingFileExtention(testPath){
   //   return new Promise((resolve, reject)=>{
       //console.log(path.extname(pathE))
       if(path.extname(testPath)==='.md'){
        //console.log(path.extname(pathE))
        return(testPath)
       }else{
        return ('Tu archivo es ' + path.extname(testPath) + ' intenta con alguno que sea .md ')
       }  
   //  })
}

module.exports = { gettingFileExtention }
//File test run
//console.log(gettingFileExtention(pathE));