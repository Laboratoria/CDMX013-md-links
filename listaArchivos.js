const fs = require('fs');
const chalk = require ('chalk');

var files = fs.readdirSync('./node_modules'); // readdirSync se ejecuta forma asincrona o sea cualquier código que este despues de esa línea espera a la lectura del archivo
console.log (chalk.green(files));

const items = fs.readdirSync('./node_modules', {withFileTypes: true});

for (let item of items) {
    const type = item.isDirectory() ? 'folder' : 'file';
    console.log(chalk.blue(`${item.name}: ${type}`));
}
process.exit();

