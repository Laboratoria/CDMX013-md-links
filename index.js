
const { hasSubscribers } = require('node:diagnostics_channel');
const fs = require('node:fs');
const { resolve } = require('node:path');
const path = require('node:path');
// const myPath = './README.md';
const { extract } = require('./linkextract.js');
const {validate} = require ('./linksvalidate.js');

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
    

  } else {
    reject("El archivo NO EXISTE!");

  }

})
console.log (newPromise)

return newPromise;

}
const myPath = './README.md';
mdlinks(myPath).then ((result)=>{
 console.log(result)
}).catch ((error)=>{
  console.log(error)
})

//resuelva la promesa con los resultados, (se tiene que resolver la promesa) falta resolverla conlos datos necesarios



//solo se esta resolviendo ruta falta conjuntarvalidate (que es el que valida los links)
//se tiene que resolver en una promesa, tiene que retornar una promesa la función (return reject)
//ver donde insertar las promesas