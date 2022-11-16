const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
const path = require('path');
const axios = require('axios');
const { validate } = require('./validate')
const { stadistics } = require('./stadistics')
// const { CLI } = require('./cli')

const pathdeprueba = './holis.md';

//CLI();

function getMdLinks(TestPath, option) { //options is an object with two boolean keys: validation and

  return new Promise((resolve, reject) => {
    // 01_a Verify if a file exists in node.js
    if (fs.existsSync(TestPath)) { //01_a a file exists in node.js
      console.log('El archivo EXISTE');
      // if the path is relative, become it in absolute one. -> resolvepath
      if (!path.isAbsolute(TestPath)) { // if it's not absolute
        path.resolve(TestPath); // become in absolute
        console.log(path.resolve(TestPath));
      }
      //////// BE SURE YOU'RE WORKING WITH A FILE 
      let stats = fs.statSync(TestPath); // Use statSync() method to store the returned   
      if (stats.isFile()) {
        console.log(TestPath + '---> IS A FILE ');
        // BE SURE YOU'RE WORKING WITH MD FILES 
        if (path.extname(TestPath) === '.md') {
          console.log(path.extname(TestPath));
          // read the file
          const textFile = fs.readFileSync(TestPath, 'utf-8');
          // extraer links y guardarlos en un array de objetos ///(\[.*\])\((https?)(:\/\/[^\s\)]+)\)/
          const regex = /(\[.*\])(\(https?(:\/\/[^\s\)]+)\))/g
          const allLinks = textFile.match((regex));
          // console.log(allLinks);
          // const newArray = [];
          const newArray = allLinks.map(element => {
            const separate = element.split('](');
            const text = separate[0].replace('[', '');
            const url = separate[1].replace(')', '');

            return ({
              href: url, // URL encontrada.
              text: text, // Texto que aparecía dentro del link (<a>).
              file: path.resolve(TestPath) // Ruta del archivo donde se encontró el link.
            })
          })
          // console.log(newArray); // => [{ href, text, file}]

          return new Promise((resolve, reject) => {
            //return validate(links3)
            if (option.stats === true && option.validate === true) {
              //console.log('new array',newArray)
              validate(newArray).then(validatedArray => resolve(stadistics(validatedArray, { validation: true })))

            } else if (option.stats === true && option.validate === false) {
              validate(newArray).then(validatedArray => resolve(stadistics(validatedArray, { validation: false })))
            } else if (option.stats === false && option.validate === true) {
              validate(newArray).then(validatedArray => resolve(validatedArray))
            } else {
              resolve(newArray)
            }
          })



        } else {
          
          console.log('Tu archivo es ' + path.extname(TestPath) + ' intenta con alguno que sea .md ');
        }

      } else if (fs.statSync(TestPath)) {
        console.log(TestPath + '---> IS A DIRECTORY');

      }

    } else { // 01_a a file doesn't exist in node.js
      // console.log('El archivo NO EXISTE')
      reject("el archivo no existe")
    }
  })

}


//ejecucion de preuba
getMdLinks(pathdeprueba, { validate: true }).then(resultado => console.log('mi resultado >>', resultado)).catch(error => console.log('error >>', error))

module.exports = { validate };
