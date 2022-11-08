const fs = require ('fs');
const path = require('path');
const axios = require('axios');
const http = require('http');



// Saber si la ruta es absoluta
const isPathAbsolute = (route) => path.isAbsolute(route);

// Convertir la ruta en absoluta
const convertPathToAbsolute = (route) => path.resolve(route);

// Es una carpeta?
const isFolder = (route) => fs.lstatSync(route).isDirectory() 

// Leer las carpetas funcion recursiva 
const readFolders = (routePath, resultFiles = []) => {
    const files = fs.readdirSync(routePath);
    files.forEach((file) => {
        const newPath = path.join(routePath, file);
        if (fs.lstatSync(newPath).isDirectory()){
            readFolders(newPath, resultFiles);
        } else{
            resultFiles.push(newPath)
        };
        })
        return resultFiles;
    }

// Leer archivo
const readFile = (route) => fs.readFileSync(route, "utf-8");

// Obtener archivos .md
const getMdFile = (file) => path.extname(file);

// validar links 
const validateLinks = (href) => axios.get(href);


module.exports = {
isPathAbsolute,
convertPathToAbsolute,
isFolder,
readFolders,
readFile,
getMdFile,
validateLinks
}