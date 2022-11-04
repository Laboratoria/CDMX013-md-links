const fs = require ('fs');
const path = require('path');
const axios = require('axios');
const http = require('http');



// saber si la ruta es absoluta
//pasandole route como parametro la hago pura
const isPathAbsolute = (route) => path.isAbsolute(route);

// convertir la ruta en absoluta
const convertPathToAbsolute = (route) => path.resolve(route);

// Es una carpeta?
const isFolder = (route) => fs.lstatSync(route).isDirectory();

// leer las carpetas
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

// leer archivo
const readFile = (route) => fs.readFileSync(route, "utf-8");

// obtener archivos .md
const getMdFile = (file) => path.extname(file);



// validar linksc
// const validateLinks = 


module.exports = {
isPathAbsolute,
convertPathToAbsolute,
isFolder,
readFolders,
readFile,
getMdFile
}