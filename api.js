
const fn = require ('./fn.js');
const chalk = require ('chalk');

const mdLinks = (filePath, opt) => 
 new Promise((resolve, reject) => { 

    // convertir la ruta en absoluta
    const isPathAbsolute = fn.isPathAbsolute(filePath)
    ? filePath
    : fn.convertPathToAbsolute(filePath);
    

   
   let allFiles = [];
    // leer carpetas
    if(fn.isFolder(isPathAbsolute)){
        allFiles = [...allFiles,...fn.readFolders(isPathAbsolute)];
    }else{
        allFiles.push(isPathAbsolute) ;

    }
    

    // obtener archivos .md
    const filesMd = allFiles.filter(file => {
    if(fn.getMdFile(file) == '.md'){
     return file;
    }
    })
   

   const linksArray = [];

     filesMd.forEach((file) => {
        // leer archivos
        const filteredFiles = fn.readFile(file)
        // obtener links
        const filterMethod = /\[(.+)\]\((https?:\/\/.+)\)/gi;
        const resultLinks = [...filteredFiles.matchAll(filterMethod)];
        if(resultLinks !== null || resultLinks !== 0){
            resultLinks.forEach(url => {
                linksArray.push({
                    href: url[2], // url encontrada
                    text: url[1].slice(0, 50), // texto del link
                    file: file // ruta del archivo donde se encontro el link
                })
            }) 
        }
        
    })




    resolve(linksArray) 

    reject('nel no hay nada')

    
 });

module.exports = {
mdLinks
}