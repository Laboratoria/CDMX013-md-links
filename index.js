
// importando require file system, son cosas por default de path
const fs = require('node:fs')
const path = require('node:path')
// importando desde otro modulo (función y de donde viene)
const { extract } = require('./linkextract.js')
const { validate } = require('./linksvalidate.js')

// meter en terminal la ruta ya no hardcodearla
const entrada = process.argv[2]
// console.log(entrada)

// La funcion principal envuelve (valide/seaunaruta/funciones/errores) dos parametros (ruta opcion)
const mdlinks = (myPath, options) => {
  // options.validate  == true se valida
  // se mete la primer promesa es la unica que hicimos (las demas solo se consumen)
  const newPromise = new Promise((resolve, reject) => {
    // si la ruta no es absoluta que la convierta a absoluta IF PRINCIPAL (se tiene que resolver primero la ruta)
    if (path.isAbsolute(myPath) === false) {
      myPath = path.resolve(myPath)
    }
    // Existe el archivo? (estatus)
    if (fs.existsSync(myPath)) {
      const checkPath = fs.statSync(myPath)
      // el archivo es un directorio? si no se cumple la promesa, se rechaza, si no se rechaza pasa al siguiente if
      if (checkPath.isDirectory()) {
        reject('Error es una carpeta, ingresa un archivo')
      }

      // Extensión terminación del archivo (.md .js)
      const extFile = path.extname(myPath)
      // console.log(extFile)

      // Si el archivo no es .md ya no pasa y se rechaza
      if (extFile != '.md') {
        reject('Error, el archivo no es md')
      }

      // Se lee el archivo si es .md y con utf-8 y lo convierte a lenguaje de texto
      // para despues resolver la promesa (ejecutando las funciones) (ESQUELETO o creación de promesa)
      else {
        // eslint-disable-next-line n/handle-callback-err
        fs.readFile(myPath, 'utf-8', (err, data) => {
          if (options.validate) {
            resolve(validate(extract(data)))
          } else {
            resolve(extract(data))
          }
        })
      }
      // El archivo no existe en ningun lado dese el inicio
    } else {
      reject('El archivo NO EXISTE!')
    }
  })
  // aun no se consume solo esta declarada (promise pending) hasta que se ponga then y catch se resuelve
  // console.log(newPromise)
  return newPromise
}
// hasta que llamamos a la función mdlinks se consume con then (resuelta) catch (error)
// mdlinks metemos ruta y objeto con el punto then la consume, dentro de mdlinks esta la promesa
mdlinks(entrada, { validate: true }).then((result) => {
  console.log(result)
  // si la promesa tiene un reject hace un console.log del error, especifica si hay una excepcion
}).catch((error) => {
  console.log(error)
})
