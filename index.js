
const { hasSubscribers } = require('node:diagnostics_channel');
const fs = require('node:fs');
const { resolve } = require('node:path');
const path = require('node:path');
// const myPath = './README.md';
const { extract } = require('./linkextract.js');
const {validate} = require ('./linksvalidate.js');
// const { validate } = require('./validate.js');
//variable global que almacene la ruta
//entrar en el punto donde es absoluto                                         
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 300);
// });

// myPromise
//   .then(handleFulfilledA, handleRejectedA)
//   .then(handleFulfilledB, handleRejectedB)
//   .then(handleFulfilledC, handleRejectedC);
 

//preguntar que hace falta (result, reject?)

const mdlinks = (myPath) => {
  const newPromise = new Promise ((resolve, reject) =>{
  console.log(myPath)
  if (path.isAbsolute(myPath) === false) {
    myPath = path.resolve(myPath); //ruta absoluta o relativa?
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
        // extract(data);
       resolve (validate (extract(data)))
      }
    });
    

    //  let texto = fs.readFileSync('<markdown.md>').toString();
    // booleano convertir a if
    //console.log(checkPath.isFile());   
    //console.log(checkPath.isDirectory());            //existe o no existe la ruta?
  } else {
    reject("El archivo NO EXISTE!");

  }

})
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


return newPromise;

}
const myPath = './README.md';
mdlinks(myPath).then ((result)=>{
 console.log(result)
}).catch ((error)=>{
  console.log(error)
})

//resuelva la promesa con los resultados, (se tiene que resolver la promesa) falta resolverla conlos datos necesarios

// buscar si path es positivo o negativo
//decidir desde un comienzo si usarás ES Modules, es decir, import/export
//librería nativa FS (FileSystem) te será de utilidad.
//leer un archivo con una ruta fija e imprimir su contenido en consola
//tomar ruta y procesarla > resultado se procesa (se toman parametros de los procesos)
//paradigma funcional
//a los nombres de las funciones siempre ponerles verbo
//arreglos plural (s)

//crear una funcion md likns
// que acepte 2 parametros (path y validate options)
//solo se esta resolviendo ruta falta conjuntarvalidate (que es el que valida los links)
//se tiene que resolver en una promesa, tiene que retornar una promesa la función (return reject)
//Cada objeto debe tener un link y contanga propiedades
//ver donde insertar las promesas