const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
//const { pathAbsolute } = require('./validapath.js');
const { extraer } = require('./mdLinks');
/*const { validaLinks } = require('./validateLinks.js');
const { validation } = require('./promesa');*/
//const { resolve } = require('path');
//const { rejects } = require('assert');


const userPath = process.argv[2];
//console.log(userPath);


//valida que el archivo sea md 
const mdLinks = (isMd) => {

    const mdExtensionFiles = path.extname(isMd) === '.md'
    if (mdExtensionFiles === false) {
        console.log(chalk.red('ARCHIVO NO ES .md'));
        console.log(chalk.red('BYE ..'));
      
    } else {
        console.log(chalk.green('ARCHIVO SI ES .md'));
        //pathAbsolute = (isMd);
        extraer(userPath);
       // validaLinks(userPath);
    }


}

mdLinks(userPath);