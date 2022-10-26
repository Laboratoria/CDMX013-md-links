const fs = require ('fs');
const path = require('path');

// saber si la ruta es absoluta
const isPathAbsolute = (route) => path.isAbsolute(route);

// convertir la ruta en absoluta
const convertPathToAbsolute = (route) => path.resolve(route);


// leer archivo
const readFile = (route) => fs.readFileSync(route, "utf-8");

module.exports = {
readFile,
isPathAbsolute,
convertPathToAbsolute
}