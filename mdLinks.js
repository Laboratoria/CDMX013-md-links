const fs = require('fs');
const chalk = require('chalk');
//const path = require ('path');


//mostramos el directorio completo
const items = fs.readdirSync('./node_modules', { withFileTypes: true });

for (let item of items) {
  const type = item.isDirectory() ? 'folder' : 'file';
  console.log(chalk.blue(__dirname + `${item.name}: ${type}`));
}

//leemos el archivo y mostramos links
const validate = (route) => {
  const links = fs.readFileSync(route, 'utf-8').match(/\[(.+)\]\((https?:\/\/.+)\)/gi);
  let list = links.map((link) => {
   const limite =  link.indexOf('](');
  
    let obj = {
      Title: link.substring(1, limite),
      file: route,
      Url: link.substring (limite +2, link.length -1 ),
    }
    return obj;

  });

  console.log(chalk.magenta('leyendo los links..'));
  console.log(list);
  return list;
}
validate('README.md')



module.exports = {
  items
}