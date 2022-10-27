const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
// const pathE = './holis.md';
// const pathE = 'C:/Users/ylera/Desktop/Laboratoria/learnyounodeexercises';

// verify if a file exists in node.js  //done
function checkingExistentPath(pathE){

  if(fs.existsSync(pathE)){
    console.log('El archivo EXISTE');
  }else{
    console.log('El archivo NO EXISTE')
  }

}
module.exports = { checkingExistentPath }
//File test run
// checkingExistentPath(pathE);

  