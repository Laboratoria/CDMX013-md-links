const fs = require("fs");
const getLinks = require("./getLinks");

module.exports = (dir, options) => {
  const links = [];
  const allFileContents = fs.readFileSync(dir, "utf-8");
  allFileContents.split(/\r?\n/).forEach((line) => {
    links.push(getLinks(line, dir, options));
  });
  return links.filter((link) => link !== undefined);
};
