const statusLink = require("./statusLink.js");

module.exports = (link) => {
  let status = statusLink(link)
    .then((result) => {
      result.status;
    })
    .catch((error) => {
      if (error.response) error.response.status;
      if (error.request) "error request";
      if (error) "error";
    });
  console.log(status);
};
