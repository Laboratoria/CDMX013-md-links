
const validate = (links) =>{
   const newArray= links.map ((link) => {
    axios.get(link)
    .then(response => {  //obtenemos datos de respuesta de servidor
        const linkValidate = {
            href: oneLink,
            statusCode: response.status,
            status: response.statusText,
           // data: response.data,
        }
       console.log(linkValidate)
       
    })
    .catch(error => {  //respuesta de error del servidor
        console.log("invalid")
    })
})


}
module.exports = {
    validate
}

       
    //promise all dentro de la funci{on}

