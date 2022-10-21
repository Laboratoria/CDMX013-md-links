const axios = require("axios");

module.exports = (link) => {
  const request = axios.get(link);

  return request.then((result) => {
    return result;
  });
};
