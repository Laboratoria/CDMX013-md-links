const statusLink = require("./statusLink.js");

module.exports = (link) => {
  let status = statusLink(link)
    .then((result) => {
      result.status;
    })
    .catch((error) => console.error(" Outside error:", error));
  console.log(status);
};
