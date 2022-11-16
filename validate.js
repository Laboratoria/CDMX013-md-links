// const pathE = './README.md';
const axios = require('axios');

const array = [
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\holis.md',
  },
  {
    href: 'https://medium.com/laboratoria-developers/recursi%C3%B3n-o-recursividad-ec8f1a359727',
    text: 'Recursión o Recursividad - Laboratoria Developers',
    file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\README.md',
  },
  {
    href: 'https://www.youtube.com/fulanitodetal/20202',
    text: 'How to Write a JavaScript Promise - freecodecamp ',
    file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\README.md',

  }
];

function validate(arrayToValidate) {
  const newValidateArray = [];

  arrayToValidate.forEach((eachObject) => {
    
    const makingPromiseRequest = axios.get(eachObject.href)  // Hacer una petición 
      .then(function (response) {
        // manejar respuesta exitosa
        const validatedObject = { ...eachObject, status: response.status, ok: 'ok' };
        return validatedObject;
      })
      .catch(function (error) {
        const validatedObject = { ...eachObject, status: error.response.status, ok: 'fail' };
        return validatedObject;

      })
    newValidateArray.push(makingPromiseRequest);
  })
  
  return Promise.all(newValidateArray);
}
 
//validate(array).then((result) => console.log(result)).catch((error) => console.log(error));

module.exports = { validate }

//validate(array);

