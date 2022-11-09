
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