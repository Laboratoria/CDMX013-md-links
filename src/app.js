const { validatePath } = require('../validatePath')
// module.exports = "hello";
// const { saludar, saludarHolaMundo } = require('./saludos.js');
// // console.log(saludos);
// console.log(saludar("delia"));
// console.log(saludarHolaMundo());
// console.log(process.argv[3]);

const fs = require('fs');

// fs.readFile('../README.md', 'utf8', (err, data) =>{
//     if(err){
//         console.log(err);
//     }else {
//         console.log(data);
//     }
// });

const readFiles = (path) => {
   // let result = '';
    if(validatePath(path) === `exists: ${path}`){
        const data = fs.readFileSync(path, 'utf8');
        console.log(data);
    }else{
       result = `DOES NOT exist: ${path}`;
        console.log(result);
    }
    
}

readFiles('./README.md')

console.log(process.argv);