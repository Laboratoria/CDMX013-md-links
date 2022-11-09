const fs = require('fs'); 
const pathE = './README.md';
// const pathE = 'C:/Users/ylera/Desktop/Laboratoria/learnyounodeexercises';

// verify if a file exists in node.js  //done
function checkingExistentPath(pathE) {
  console.assert(fs.existsSync(pathE), 'El archivo NO existe');
  return  fs.existsSync(pathE)  // true or false
  
} 

module.exports = { checkingExistentPath }
//File test run
 checkingExistentPath(pathE);






/////////////////////////////////////////////
// // verify if a file exists in node.js  //done
// function checkingExistentPath(pathE){
//    fs.existsSync(pathE)
//   if(fs.existsSync(pathE)){
//     console.log('El archivo EXISTE');
//   }else{
//     console.log('El archivo NO EXISTE')
//   }

// }
// module.exports = { checkingExistentPath }
// //File test run
// checkingExistentPath(pathE);
  