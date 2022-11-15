const axios = require("axios");

const validate = (links) => {
  return Promise.all(links.map((link) => {
    return axios.get(link)
      .then((response => {
        const linkValidate = {
          //obtener el titulo del enlace / file name (nombre del archivo)
          //CLI (lista de links)
          // [title](URL)
          //CLI modulo distinto
          //quitar console.log
          //CLI el usuario entrega un array process.argv
// ['node', 'index.js', '--validate', '.'] (iterar)
          // title:
      
          href: response.config.url,
          statusCode: response.status,
          status: response.statusText,
// expresion regular de los links ampliarla
// 3 variables para obtener los datos
        }
//cosume promesas
        return linkValidate
        //crear objeto (status mess, status code, responseUrl)
      }))
      .catch(error => {
        const linkinvalid = {
          href: link,
          statusCode: error.status,
          statusText: error.message,
          message: "fail",
        }
        return linkinvalid
      })
  }))
}

{
  module.exports = { validate }
}
