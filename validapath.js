const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
const { resolve } = require('path');

const userPath = process.argv[2];



// Verifica si la ruta es absoluta, y si no la convierte
const pathAbsolute = (userPath) => path.isAbsolute(userPath) ? userPath : path.resolve(userPath);
console.log(chalk.yellow('ESTA ES TU RUTA ABSOLUTA : ' + pathAbsolute(userPath)));


//mostramos el directorio completo
/*/const items = fs.readdirSync('./test', { withFileTypes: true });

for (let item of items) {
    const type = item.isDirectory() ? 'folder' : 'file';
    console.log(chalk.yellow('ESTE ES EL ARCHIVO DENTRO DE TU CARPETA .. '));
    console.log(chalk.blue(__dirname + `${item.name}: ${type}`));
}*/


module.exports = {
    pathAbsolute
}