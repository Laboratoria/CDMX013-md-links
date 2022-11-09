// const { validatePath } = require('../validatePath')
const fs = require("fs");
const path = require("path");
const { getObjetValidateFalse } = require('./getObjetValidateFalse');

const readFileAndGetMdLinks = (path) => {
  let fileContent = fs.readFileSync(path, "utf8");

  const linkRegex = /(\[.*\])\((https?)(:\/\/[^\s\)]+)\)/g;
  let linksMdInFile = fileContent.match(linkRegex);

  //hacer map o filters voy a leer el arreglo de los links y file
    let hrefLinks = getObjetValidateFalse(linksMdInFile);

 // console.log(linksMdInFile);
  return linksMdInFile;

  //console.log(fileContent);
};
 //readFileAndGetMdLinks("./README.md");

module.exports = {
  readFileAndGetMdLinks
  
};

// console.log(process.argv);
