// const { validatePath } = require('../validatePath')
const fs = require('fs');

const readFileAndGetMdLinks = (path) => {
     let result = '';
     if(fs.existsSync(path)){
         const data = fs.readFileSync(path, 'utf8');
         console.log(data);
     }else{
        result = `DOES NOT exist: ${path}`;
         console.log(result);
     }
     
 }
 
 readFiles('./README.md')
 
 // console.log(process.argv);