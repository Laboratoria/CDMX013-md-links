const pathExist = require("./lib/pathExist");
const pathAbsolute = require("./lib/absolutePath");
const path = require("path");
const read = require("./lib/readFile");
const fs = require("fs");
let dir = process.argv[2];

module.exports = () => {
  dir = pathAbsolute(dir);
  const results = [];
  const openFolder = (dir) => {
    list = fs.readdirSync(dir);
    list.forEach((file) => {
      let newDir = path.join(dir, file);
      if (fs.lstatSync(newDir).isDirectory()) {
        openFolder(newDir);
      }

      if (path.extname(newDir) == ".md") {
        results.push(read(newDir));
      }
    });
  };

  if (pathExist(dir)) {
    if (fs.lstatSync(dir).isDirectory()) {
      openFolder(dir);
    }

    if (path.extname(dir) == ".md") results.push(read(dir));
  }
  console.log(results[0]);
  return results[0];
};

const mdLink = require("./index.js");
mdLink();
