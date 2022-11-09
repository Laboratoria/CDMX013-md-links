const fs = require('node:fs');
const path = require('node:path');
const pathFile = './README.md'
const  {extractLink} = require ('./extractlinks.js')
const  {validate} = require ('./validate.js')
const mdLinks = (pathFile, options) => {

  if (path.isAbsolute(pathFile) === false) {
    pathFile = path.resolve(pathFile);
  }

  if (fs.existsSync(pathFile)) {
    let statFile = fs.statSync(pathFile);

    if (statFile.isDirectory()) {
      return (TypeError);
    }

    let textFile = path.extname(pathFile);
    //console.log(textFile);

    if (textFile != ".md") {
      console.log(TypeError);
    }
    fs.readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        console.log("error:", err);
      } else {
         extractLink(data); //llamar a validate
      }
    });
  } else {
    console.log("The file doesn´t exists");
  }
}
mdLinks(pathFile);