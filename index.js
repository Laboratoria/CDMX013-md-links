module.exports = () => {
  // ...
};

const fs = require("fs");
const path = require("path");
const { validateHref } = require("./validateHref");
const { readDirAndGetMdFiles } = require("./readDirAndGetMdFiles");
const { readFileAndGetMdLinks } = require("./readFileAndGetMdLinks");
const { getObjetValidateFalse } = require("./getObjetValidateFalse");

const entryFile = process.argv[2];
const option = process.argv[3];

function mdLinks(entryFile, option) {
  new Promise((resolve, reject) => {
    let absolutePath;
    if (path.isAbsolute(entryFile)) {
      absolutePath = entryFile;
    } else {
      absolutePath = path.resolve(entryFile);
    }
    // console.log(absolutePath);
    let links;
    //hey no avance mas aca se acaba todo
    if (!fs.existsSync(absolutePath)) {
      // throw new Error(`DOES NOT exist: ${absolutePath}`)
      const error = `DOES NOT exist: ${absolutePath}`;
      console.log(error);
      return error;
    }

    if (fs.statSync(absolutePath).isDirectory()) {
      // si es folder, llamar a función para abrir folder y leer contenido
      links = readDirAndGetMdFiles(absolutePath);
    } else {
      // es archivo, llamar función que leer el contenido
      links = readFileAndGetMdLinks(absolutePath, entryFile);
    }
    // console.log(links);
  });
}

mdLinks(entryFile);

module.exports = {
  entryFile,
};
