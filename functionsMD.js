// const fs = require('fs');
// const path = require('path');

// const pathE = './README.md';

// // verify if a file exists in node.js  //done
// function checkingExistentPath(pathE) {
//     fs.existsSync(pathE)
//     console.assert(fs.existsSync(pathE), 'El archivo NO existe');
// }

// module.exports = { checkingExistentPath }
// //File test run
// // checkingExistentPath(pathE);


const axios = require('axios');

function validate(eachObject) {

    // Hacer una petición 
  const makingPromiseRequest =  axios.get(eachObject.href)
        .then(function (response) {
            // manejar respuesta exitosa
           // console.log(response.status);
           const validatedObject ={
            ...oneObject, 
            status: response.status, 
            ok:'ok'};
           return validatedObject;
        })
        .catch(function (error) {
            const validatedObject ={
                ...oneObject, 
                status: error.status, 
                ok:'fail'};
               return validatedObject;
            // manejar error
            // console.log(eachObject);
            // console.log(error.code);
            // //const errorResponse = error.response;
            // eachObject.status = error.response.status;
            // eachObject.ok = 'fail';
            // console.log(eachObject)
           
        })
        // .then(function () {
        //     // siempre sera executado
        // });

}

module.exports = { validate }
// File test run
// validate(  {
//     href: 'https://es.wikipedia.org/wiki/Markdown',
//     text: 'Markdown',
//     file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\holis.md'
//   });




  function getResolve(oneObject){ //peticion http
    const promesa1 = axios.get(oneObject.href)
    return promesa1
    .then((resultado)=>{
        console.log(resultado.status);
        const validatedObject = {...oneObject, status: resultado.status, ok:'ok'}
        return validatedObject;
    });
  }

// llamando a la promesa1
const promesaResolve = getResolve(  {             //promesa con el resultado 
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\holis.md'
  });

  promesaResolve.then((resultado)=> console.log(resultado))

  console.log(promesaResolve);