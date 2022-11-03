const fs = require ('fs');
const path = require('path');
const axios = require('axios');
const http = require('http');


// saber si la ruta es absoluta
//pasandole route como parametro la hago pura
const isPathAbsolute = (route) => path.isAbsolute(route);

// convertir la ruta en absoluta
const convertPathToAbsolute = (route) => path.resolve(route);

// leer archivo
const readFile = (route) => fs.readFileSync(route, "utf-8");

// obtener archivos .md
const getMdFile = (file) => path.extname(file);



// validar linksc
// const validateLinks = 


module.exports = {
isPathAbsolute,
convertPathToAbsolute,
readFile,
getMdFile
}