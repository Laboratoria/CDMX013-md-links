/*const axios = require("axios")

function validate (links){
 const requestHttp = axios.get(links.href);
 
 requestHttp.then(response => {  
    if(response.status >=200 && response.status<300){
        const linkValidate = {
            href: oneLink,
            statusCode: response.status,
            status: response.statusText,
           // data: response.data,
        }; 
        console.log (linkValidate)
    }
      
       
    })
    .catch(error => {  //respuesta de error del servidor
        console.log("invalid")
    }

       
    )
}
module.exports = {
    validate
}*/