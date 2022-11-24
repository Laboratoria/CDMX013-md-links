  const fs = require("fs");
  const path = require("path");
  const { readDir } = require("./readDir");
  const { readFile } = require("./readFile");

  function getLinks(entryFile) {
      let absolutePath;
      if (path.isAbsolute(entryFile)) {
        absolutePath = entryFile;
      } else {
        absolutePath = path.resolve(entryFile);
      }
      let links;
    
      if (!fs.existsSync(absolutePath)) {
        const error = `DOES NOT exist: ${absolutePath}`;
        console.log(error);
        return error;
      }
  
      if (fs.statSync(absolutePath).isDirectory()) {
        links = readDir(absolutePath);
         
       // console.log(links)
      } else {
        links = readFile(absolutePath, entryFile);
      }
      return links
  }
  
  module.exports = {
    getLinks,
  };
  