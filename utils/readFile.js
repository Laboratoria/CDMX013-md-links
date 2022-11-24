const fs = require("fs");
const path = require("path");



const readFile = (path, entryFile) => {
  let fileContent = fs.readFileSync(path, "utf8");

  const linkRegex = /(\[.*\])\((https?)(:\/\/[^\s\)]+)\)/g;

  let linksMdInFile = fileContent.match(linkRegex);

  //hacer map o filters voy a leer el arreglo de los links y file
   // console.log(linksMdInFile);
  return linksMdInFile;

  //console.log(fileContent);
};
 //readFileAndGetMdLinks("./README.md");

module.exports = { readFile }

// console.log(process.argv);
