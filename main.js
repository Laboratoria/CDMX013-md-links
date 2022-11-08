const fs = require("fs");
const path = require("path");

const entryFile = process.argv[2];

function mdLinks(entryFile) {
  let absolutePath
  if (path.isAbsolute(entryFile)) {
    absolutePath = entryFile;
  } else {
    absolutePath = path.resolve(entryFile);
  }
  // console.log(absolutePath);
  let links;
  if (fs.statSync(absolutePath).isDirectory()) {
    // si es folder, llamar a función para abrir folder y leer contenido
    links = readDirAndGetMdFiles(absolutePath);
    
  } else {
    // es archivo, llamar función que leer el contenido
    links =readFileAndGetMdLinks(absolutePath);
  }
}

mdLinks(entryFile);
