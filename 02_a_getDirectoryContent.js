// // Require the given module 
const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
  const pathE = './holis.md'; //this is a constat of a  test path (ruta prueba)
// const pathE = 'C:/Users/ylera/Desktop/Laboratoria/learnyounodeexercises'; //this is a constat of a  test path (ruta prueba)

/* function answerFileOrDirectory(pathE){

    var stats = fs.statSync(pathE); // Use statSync() method to store the returned   
    console.log('is it file ? ' + stats.isFile()); // Use isFile() method to log the result to screen 
    var stats = fs.statSync(pathE);
    console.log('is it directory ? ' + stats.isDirectory()); // Use isDirectory() method to log the result to screen    

} */

function answerFileOrDirectory(pathE){

    let stats = fs.statSync(pathE); // Use statSync() method to store the returned   
    if(stats.isFile()){
        console.log(pathE + '---> IS A FILE '); 
    } else if(fs.statSync(pathE)){
        console.log(pathE +'---> IS A DIRECTORY' );   
    }
    
}

module.exports = { answerFileOrDirectory }
//File test run
answerFileOrDirectory(pathE);