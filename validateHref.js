const axios = require("axios");

// const links = [
//   {
//     href: "https://medium.com/laboratoria-developers/recursi%C3%B3n-o-recursividad-ec8f1a359727",
//     text: "Recursión o Recursividad - Laboratoria Developers",
//     file: "README.md",
//   },
//   {
//     href: "https://www.youtube.com/fulanitodetal/20202",
//     text: "How to Write a JavaScript Promise - freecodecamp ",
//     file: "README.md",
//   },
// ];


function validateHref(links) {
  // const newValidateArray = [];
  return Promise.all(
    links.map((link) => {
      return (
        axios.get(link.href) // Hacer una petición    
          .then(function (response) {
            // manejar respuesta exitosa
            // console.log(response.status);
            return getObjectValidateTrue = { ...link, stats: response.status, ok: 'ok' };
          })
          .catch(function (error) {
            // console.log(error.response);  //error.cause
            return getObjectValidateTrue = { ...link, stats: error.response.status, ok: 'fail'};
          })
      );
    })
  );
}

 validateHref(links).then(console.log);
// console.log(validateHref(links)); 

module.exports = { validateHref }
