const axios = require('axios')

const validate = (links) => {
  return Promise.all(links.map((link) => {
    return axios.get(link)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          const statRequest = {
            href: link,
            statusCode: response.status,
            status: response.statusText

          }
          return statRequest
        }
      })
      .catch(error => {
        const statRequest = {
          href: link,
          statusCode: error.status,
          statusText: error.message,
          message: 'fail'
        }
        return statRequest
      })
  }))
}

{
  module.exports = { validate }
}
