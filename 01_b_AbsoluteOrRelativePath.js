const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
// const pathE = './holis.md'; //this is a constat of a  test path (ruta prueba)
const pathE = 'C:/Users/ylera/Desktop/Laboratoria/learnyounodeexercises'; //this is a constat of a  test path (ruta prueba)
//esto es una libreria
var path = require('path');

function resolvePath(pathToResolve) {

    if (path.isAbsolute(pathToResolve)) {
        console.log('Soy absoluta')
    } else {
        console.log('NO SOY absoluta');
        //convertir en absoluta
        console.log(path.resolve(pathToResolve));
        console.log('ahora ya soy RUTA absoluta :D ');
    }
    // getting an extension of a path
    console.log(path.extname(pathToResolve))
}

module.exports = { resolvePath }
//ejecucion de prueba de archivo
resolvePath(pathE)