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
    const makingPromiseRequest = axios.get(eachObject.href);  // Hacer una petición 
    return makingPromiseRequest
        .then(function (response) {
            // manejar respuesta exitosa
            // console.log(response.status);
            const validatedObject = {...eachObject, status: response.status, ok: 'ok'
            };
            // console.log(validatedObject);
            return validatedObject;
        })
        .catch(function (error) {
            //console.log(error.response);  //error.cause
            const validatedObject = {...eachObject, status: error.cause.code, ok: 'fail'};
            //  console.log(validatedObject);
            return validatedObject;
        })
}
   // llamando a la promesa1 con File test run
const resolvedPromise = validate (
    {
        href: 'http://community.laboratoria.la/c/js',
        text: 'foro de la comunidad',
        file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\README.md',
        ok: 'fail'
      }
  );

  resolvedPromise.then((resultado) => console.log(resultado))

    console.log(resolvedPromise);


 module.exports = { validate }





// function getResolve(oneObject) { //peticion http
//     const promesa1 = axios.get(oneObject.href)
//     return promesa1
//         .then((resultado) => {
//             console.log(resultado.status);
//             const validatedObject = { ...oneObject, status: resultado.status, ok: 'ok' }
//             return validatedObject;
//         });
// }

// // llamando a la promesa1
// const promesaResolve = getResolve({             //promesa con el resultado
//     href: 'https://es.wikipedia.org/wiki/Markdown',
//     text: 'Markdown',
//     file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\holis.md'
// });

// // promesaResolve.then((resultado) => console.log(resultado))

// // console.log(promesaResolve)