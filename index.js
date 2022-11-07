
const fs = require('node:fs');
const path = require('node:path');
const myPath = './README.md';
const { extract } = require('./linkextract.js');


//variable global que almacene la ruta
//entrar en el punto donde es absoluto

const mdlinks = (myPath, options) => {
  console.log(myPath)
  if (path.isAbsolute(myPath) === false) {
    myPath = path.resolve(myPath); //rtua absoluta o relativa?
  }


  //const checkPath = fs.statSync(myPath)

  if (fs.existsSync(myPath)) {
    let checkPath = fs.statSync(myPath);

    if (checkPath.isDirectory()) {
      console.log(TypeError);
    }



    let otherPath = path.extname(myPath);
    console.log(otherPath);

    if (otherPath != ".md") {
      console.log(TypeError);
    }

    fs.readFile(myPath, 'utf-8', (err, data) => {
      if (err) {
        console.log('error: ', err);
      } else {
        //extractorLinks(data);
        extract(data);
      }
    });

    //  let texto = fs.readFileSync('<markdown.md>').toString();
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