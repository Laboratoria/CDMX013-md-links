const pathExist = require("./lib/pathExist");
const pathAbsolute = require("./lib/absolutePath");
const path = require("path");
const read = require("./lib/readFile");
const fs = require("fs");
let dir = process.argv[2];
const options = { validate: process.argv[3], stats: process.argv[4] };

module.exports = () => {
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

const mdLink = require("./index.js");
const links = mdLink();
const promises = links.map((p) =>
  p.status.then((statusValue) => {
    return {
      ...p,
      status: statusValue,
    };
  })
);
Promise.all(promises).then((data) => {
  console.log(data);
});
