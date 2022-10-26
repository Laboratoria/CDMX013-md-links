const fn = require ('./fn.js');
const api = require ('./api');
const axios = require ('axios');

// not absolute ./README.md
// absolute     /Users/jazmin/Downloads/Laboratoria/Mex013/MD_links_S/CDMX013-md-links-S/README.md

// saber si la ruta es absoluta
// console.log(fn.isPathAbsolute('/Users/jazmin/Downloads/Laboratoria/Mex013/MD_links_S/CDMX013-md-links-S/README.md'));

// convertir ruta a absoluta
// console.log(fn.convertPathToAbsolute('./README.md'));

// leer archivo
// console.log(fn.readFile("text.txt"));

// obtener archivo .md
console.log(fn.getMdFile("README.md"))  // luego obterner solo los archivos .md