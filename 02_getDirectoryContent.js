// // Require the given module 
const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
// const pathE = './holis.md'; //this is a constat of a  test path (ruta prueba)
 const pathE = 'C:/Users/ylera/Desktop/Laboratoria/learnyounodeexercises'; //this is a constat of a  test path (ruta prueba)

// Use statSync() method to store the returned
// instance into variable named stats
var stats = fs.statSync(pathE);
   
// Use isFile() method to log the result to screen
console.log('is it file ? ' + stats.isFile());
  
var stats = fs.statSync(pathE);
   
// Use isDirectory() method to log the result to screen
console.log('is it directory ? ' + stats.isDirectory());



// //  fs.readFile('README.md'); // This method will return a Buffer object containing the complete contents of the file.
// const buffer = fs.readFileSync(pathE); // This method will return a Buffer object containing the complete contents of the file.
// //  console.log( buffer);
// const buffertoString =  buffer.toString(); //this shows us what the file contents
//   console.log(buffertoString);