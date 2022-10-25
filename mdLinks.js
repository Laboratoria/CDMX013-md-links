const fs = require('fs');
const chalk = require('chalk');
const path = process.openStdin();
/*
//pediir path y mostarlo
console.log(chalk.cyan("Ingrese path:"));

path.addListener("data", (data) => {
   
    console.log(chalk.magenta("Tu path es: " + data.toString()));
   // Require the given module 
  

});*/


//mostar directorio
const items = fs.readdirSync('./test', {withFileTypes: true});

for (let item of items) {
    const type = item.isDirectory() ? 'folder' : 'file';
    console.log(chalk.blue(`${item.name}: ${type}`));
}

process.exit();
