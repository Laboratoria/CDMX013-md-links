const fs = require("fs");
const getLinks = require("./getLinks");

module.exports = (dir) => {
  /* fs.readFile(dir, "utf8", function (err, contents) {
    if (err) {
      console.log(err);
    }
    console.log(typeof contents);
  });*/
  const links = [];
  const allFileContents = fs.readFileSync(dir, "utf-8");
  allFileContents.split(/\r?\n/).forEach((line) => {
    links.push(getLinks(line, dir));
  });
  return links.filter((link) => link !== undefined);
};
