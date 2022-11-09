const fetch = require('node-fetch');
const chalk = require('chalk');
const { onlyVal } = require('./onlyValidation');
const { extraer } = require('./mdLinks');
const { link } = require('fs');
const {unlink} = require('./onlyValidation');
const userPath = process.argv[2];
//console.log(userPath);
const  validaLinks = (link) => { //nunca modificar es parametro de mi funcion
  fetch(link)
    .then((response) => {
      console.log(chalk.green('si funciona'));
      console.log(response.status);
      // Do something with response
    })
    .catch(function (err) {
      console.log(chalk.red('no funciona link'));
      console.log("Unable to fetch -", err);
    });
}

 Promise.all(unlink.map(validaLinks)).then((resultado) => {
  console.log(resultado);
 
})

/*) => {
  let allValue = link.map(link => {
    return onlyVal(link.href).then(respuesta => {
      link.status = respuesta
      if (respuesta < 300) {
        link.message = 'funciona'
      } else {
        link.message = 'no funciona'
      }
      return link
    }).catch(err =>{
      link.status = err
      return link
    })
 })
return new Promise((resolve, reject)=> {
  Promise.all(allValue).then(fin => {
    resolve(fin)
  })
})

}*/

module.exports = {
  validaLinks
}

