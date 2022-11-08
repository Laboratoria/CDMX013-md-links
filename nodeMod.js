const path = require('node:path');

const resolveToAbsolutePath = (receivedPath) =>{
    let checkifPathIsAbsolute = path.isAbsolute(receivedPath);
  
    if(checkifPathIsAbsolute === true){
      return receivedPath
    } else if( checkifPathIsAbsolute === false){
      let newPath =  path.resolve(__dirname, receivedPath)
      return newPath
    }
  } 

const getFileExtension = (filePath) => path.extname(filePath);

module.exports = { resolveToAbsolutePath, getFileExtension };

