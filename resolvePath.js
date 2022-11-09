const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
var path = require('path');
//const pathE = './holis.md'; //this is a constat of a  test path (ruta prueba)
const pathE = 'C:/Users/ylera/Desktop/Laboratoria/learnyounodeexercises'; //this is a constat of a  test path (ruta prueba)

function resolvePath(pathE) {
let absolutePath = pathE;
return new Promise((resolve, reject)=>{
  if(path.isAbsolute(pathE)){
    //console.log(path.resolve(pathE));
    resolve(absolutePath = pathE)
  }else if (!path.isAbsolute(pathE)) { // if it's not absolute
    //console.log(path.resolve(pathE));
    resolve(absolutePath = path.resolve(pathE)); // become in absolute
  }
  reject('error al resolver la ruta a absoluta')

})

}

module.exports = { resolvePath }
//File test run
// resolvePath(pathE);




/////////
// function resolvePath(pathE) {

  // if (path.isAbsolute(pathE)) {
  //     console.log('Soy absoluta')
  // } else {
  //     console.log('NO SOY absoluta');
  //     //convertir en absoluta
  //     console.log(path.resolve(pathE));
  //     console.log('ahora ya soy RUTA absoluta :D ');
  // }

// }

// module.exports = { resolvePath }
//File test run
// resolvePath(pathE);