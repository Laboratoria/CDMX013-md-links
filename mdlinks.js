const path = require ('path');
const chalk = require ('chalk');
const fs = require('fs');
//importar el modulo fs
//Read files
fs.readFile('./README.md', 'utf-8', (err, data) => {
  if(err) {
    console.log('error: ', err);
  } else {
    console.log(chalk.magenta(data));
  }
});


// traer mdlinks
const traermdlinks = (path) => {
  console.log(path)
}