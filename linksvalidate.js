const axios = require("axios");

const validate = (links) =>{
 return Promise.all(links.map ((link) => {
  return axios.get(link)
  .then((response => {
    const linkValidate = {
      href: linkPrueba,
      statusCode: response.status,
      status: response.statusText,
    
    }

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
module.exports = {validate}
}
