const fs = require ('fs');
const path = require('path');

// saber si la ruta es absoluta
const isPathAbsolute = (route) => path.isAbsolute(route);


// leer archivo
const readFile = (route) => fs.readFileSync(route, "utf-8");

module.exports = {
readFile,
isPathAbsolute
}