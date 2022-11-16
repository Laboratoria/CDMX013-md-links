const fs = require('fs'); 
// const pathE = 'C:/Users/ylera/Desktop/Laboratoria/learnyounodeexercises';

// verify if a file exists in node.js  //done
function checkingExistentPath(pathE) {
  
    if(fs.existsSync(pathE)){
       //console.log((pathE)); //true
      return (pathE);
    }else if(!fs.existsSync(pathE)){
       //console.log(fs.existsSync(pathE)); //false
      return ('El archivo NO existe');
    }

}

module.exports = { checkingExistentPath }

//File test run
//  checkingExistentPath(pathE);






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
  