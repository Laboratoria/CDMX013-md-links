const fs = require('fs'); // this module enables interacting with the file system in a way modeled on standard POSIX functions.
const path = require('path');

 const pathdeprueba = './README.md';

function getMdLinks(TestPath) {
    // 01_a Verify if a file exists in node.js
    if (fs.existsSync(TestPath)) { //01_a a file exists in node.js
      console.log('El archivo EXISTE');
      // si la ruta no es absoluta conviertela en absoluta ..... etc... -> resolvepath
      if (!path.isAbsolute(TestPath)){ // if it's not absolute
        path.resolve(TestPath); // become in absolute
        console.log(path.resolve(TestPath));
      }
      //////// BE SURE YOU'RE WORKING WITH A FILE 
      let stats = fs.statSync(TestPath); // Use statSync() method to store the returned   
      if(stats.isFile()){
          console.log(TestPath + '---> IS A FILE '); 
          // BE SURE YOU'RE WORKING WITH MD FILES 
          if(path.extname(TestPath)=== '.md'){
            console.log(path.extname(TestPath));
            // read the file
            const texto = fs.readFileSync(TestPath, 'utf-8');
            // extraer links y guardarlos en un array de objetos ///(\[.*\])\((https?)(:\/\/[^\s\)]+)\)/
            const regex = /(\[.*\])(\(https?(:\/\/[^\s\)]+)\))/g
            // const allLinks = texto.match((regex));
            //console.log('all linksd', allLinks);
            //console.log( "hola esto es un string [texto de link](http://youtube.com) otro texto aca [texto otro link](http://facebook.com)".match((regex)))
            console.log(regex.exec("[texto de link](http://youtube.com)], [texto de link](http://youtube.com)"))
  
          }else{
            // console.log(path.extname(TestPath));
            console.log('Tu archivo es ' + path.extname(TestPath) + ' intenta con alguno que sea .md ');
          }
  
      } else if(fs.statSync(TestPath)){
          console.log(TestPath +'---> IS A DIRECTORY' );   
      }
  
    } else { // 01_a a file doesn't exist in node.js
      console.log('El archivo NO EXISTE')
    }

  }

  //ejecucion de preuba
getMdLinks(pathdeprueba);