const fetch = require('node-fetch');
const { extraer } = require('./mdLinks');

const userPath = process.argv[2];
//console.log(userPath);


const validaLinks = (link)  => {
    console.log(link);
      return fetch(link)
        .then((response) => {
          console.log(response.statusText);
          console.log(response.status);
          
          // Do something with response
        })
        .catch(function (err) {
          console.log("Unable to fetch -", err);
        });
      
}

module.exports = {
   validaLinks
}