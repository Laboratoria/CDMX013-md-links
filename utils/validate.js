const axios = require("axios");
  
const validate=(links)=> {
  return Promise.all(
    links.map((link) => {
      return (
        axios.get(link.href)  
          .then(function (response) {
            
            return getObjectValidateTrue = { ...link, stats: 200, ok: 'ok' };
          })
          .catch(function (error) {
            return getObjectValidateTrue = { ...link, stats: 404, ok: 'fail'};
          })
      );
    })
  );
}

module.exports = { validate }
