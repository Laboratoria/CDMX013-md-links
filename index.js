const pathAbsolute = require("./lib/pathExist");
const path = require("path");
let dir = process.argv[2];

module.exports = () => {
  console.log(pathAbsolute(dir));
};

const mdLink = require("./index.js");
mdLink();
