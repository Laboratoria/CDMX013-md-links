const pathExist = require("./pathExist");
const pathAbsolute = require("./absolutePath");
const path = require("path");
const read = require("./readFile");
const fs = require("fs");

module.exports = (dir, options) => {
  dir = pathAbsolute(dir);
  const results = [];
  const openFolder = (dir) => {
    if (fs.lstatSync(dir).isDirectory()) {
      list = fs.readdirSync(dir);
      list.forEach((file) => {
        let newDir = path.join(dir, file);
        if (fs.lstatSync(newDir).isDirectory()) {
          openFolder(newDir);
        }

        if (path.extname(newDir) == ".md") {
          results.push(...read(newDir, options));
          //here must be process file inside ()
        }
      });
    }

    if (path.extname(dir) == ".md") {
      results.push(...read(dir, options));
    }
  };

  if (pathExist(dir)) {
    openFolder(dir);
  }

  return results;
};
