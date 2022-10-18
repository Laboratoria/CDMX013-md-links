const axios = require("axios");

module.exports = (link) => {
  axios
    .get(link)
    .then(function (response) {
      // handle success
      console.log(link);
      return response.status;
    })
    .catch(function (error) {
      // handle error
      //console.log(error);
    })
    .then(function () {
      // always executed
    });
};
