
const fn = require ('./fn.js');

 
 // get file extention .md  para cuando lea tambien folders
 const getMdFiles = allFiles.filter(file => {
    if(functions.getExtName(file) == '.md'){
     return file;
    }
})




module.exports = {
getMdFiles
}