
//importa axios (traer respuesta http del servidor)
const axios = require('axios')

// la funcion a la hora que cumple la promesa retorna un objeto (va validar los links)
const validate = (links) => {
// promise all recibe un arreglo de promesas y la resuelve para devolvernos un arreglo con objetos (links con propiedades)
// itera con map en cada link y devuelve un array de objetos con propiedades
  return Promise.all(links.map((link) => {
    return axios.get(link)
      .then(response => {
        const linkValidate = {
          href: response.config.url,
          statusCode: response.status,
          status: response.statusText
        }
        // si se cumple la promesa retorna la respuesta de axios tanto then o catch (el objeto se compone de diferentes propiedades)
        return linkValidate
      })
      .catch(error => {
        const linkinvalid = {
          href: link,
          statusCode: error.status,
          statusText: error.message,
          message: 'fail'
        }
        return linkinvalid
      })
  }))
}

{
  module.exports = { validate }
}
