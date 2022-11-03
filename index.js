
const fs = require('node:fs');
const path = require('node:path');
const myPath = './readme.md';

//variable global que almacene la ruta
//entrar en el punto donde es absoluto

const mdlinks = (myPath, options) => {
  console.log(myPath)
  if (path.isAbsolute(myPath) === false) {
    myPath = path.resolve(myPath); //rtua absoluta o relativa?
  }
  //console.log(myPath)

  //const checkPath = fs.statSync(myPath)

  if (fs.existsSync(myPath)) {
    let otherPath = path.extname(myPath);
    console.log(otherPath)
    if (otherPath != ".md") {
      console.log(TypeError);
    }


    // booleano convertir a if
    //console.log(checkPath.isFile());   
    //console.log(checkPath.isDirectory());            //existe o no existe la ruta?
  } else {
    console.log("El archivo NO EXISTE!");

  }

  //directo a un archivo
  //¿Que es una promesa?
  //Que es un callback

  // Function to get current filenames
  // in directory with specific extension
  // prueba.forEach(file => {

  // if (path.extname(file) == ".md"){
  //   let array = []
  //   return array
  // }

  // console.log(prueba);
  // })


  // fs.readFile(myPath [options], callback)

  // fs.readFile('archivo.txt', 'utf-8', (err, data) => {
  //   if(err) {
  //     console.log('error: ', err);
  //   } else {
  //     console.log(data);
  //   }
  // });
}
mdlinks(myPath);





// import { readFileSync } from 'fs';

//Windows
// readFileSync('<directory>');
// => [Error: EISDIR: illegal operation on a directory, read <directory>]

//  FreeBSD
// readFileSync('<directory>'); // => <data>


// buscar si path es positivo o negativo
//decidir desde un comienzo si usarás ES Modules, es decir, import/export
//librería nativa FS (FileSystem) te será de utilidad.
//leer un archivo con una ruta fija e imprimir su contenido en consola
//tomar ruta y procesarla > resultado se procesa (se toman parametros de los procesos)
//paradigma funcional
//a los nombres de las funciones siempre ponerles verbo
//arreglos plural (s)