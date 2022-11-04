/*
const fn = require ('./fn.js');

const mdLinks = (filePath, opt) => 
 new Promise((resolve, reject) => { 

    // convertir la ruta en absoluta
    const isPathAbsolute = fn.isPathAbsolute(filePath)
    ? filePath
    : fn.convertPathToAbsolute(filePath);
   

   let allFiles = [];
    // leer carpetas
    if(functions.isFolder(isPathAbsolute)){
        allFiles = [...allFiles,...functions.readFolders(isPathAbsolute)];
    }else{
        allFiles.push(isPathAbsolute);

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
        const filteredFiles = fn.readFile(file);
        // GET LINKS
        const filterMethod = /\[(.+)\]\((https?:\/\/.+)\)/gi;
        const resultLinks = [...filteredFiles.matchAll(filterMethod)];
        if(resultLinks !== null || resultLinks !== 0){
            resultLinks.forEach(url => {
                arrayLinks.push({
                    href: url[2],
                    text: url[1].slice(0, 50),
                    file
                })
            }) 
        }

    })


    
// });

module.exports = {
isPathAbsolute
}
*/