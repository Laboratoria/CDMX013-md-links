const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
const { argv } = require('node:process');
const {readArchivo} = require('./readFiles.js');

const fileName = argv[2];
console.log(chalk.magenta(fileName));
const resolverpath = path.resolve(fileName);
console.log(resolverpath);


const review = file => {
    const review = path.extname(file);
if (review == '.md') {
   
    console.log(readArchivo(fileName));
   } else {
        console.log(chalk.red('NO ES ARCHIVO.md'));
    }

}

