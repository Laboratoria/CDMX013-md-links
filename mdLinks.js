const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
//const fetch = require('node-fetch');


const userPath = process.argv[2];
console.log(userPath);

//const validationLinks = require('./extraerLinks.js')
//validationLinks (['https://nodejs.org/']);


//verificamos si la ruta existe 
//const extraerPath  =  fs.existsSync;
//console.log(extraerPath(userPath) + '   verificamos ruta');


//leemos el archivo y mostramos links
const extraer = (userPath) => {
   
    const links = fs.readFileSync(userPath, 'utf-8').match(/\[(.+)\]\((https?:\/\/.+)\)/gi);
    let list = links.map((link) => {
        const limite = link.indexOf('](');

        const obj = {
            href: link.substring(limite + 2, link.length - 1),
            text: link.substring(1, limite),
            file: userPath,
        }
        return obj;

    });

    console.log(chalk.magenta('leyendo los links..'));
    console.log(list);
    return list;
}


module.exports = {
    userPath,
    extraer,

}