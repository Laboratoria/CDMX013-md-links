const fetch = require('node-fetch');
const fs = require('fs');
const {extraer} = require('./mdLinks.js');

const userPath = process.argv[2];
const objetolink = extraer(userPath);

const unlink = objetolink.map((obj)=>{
    const linkobjeto = obj.href;
    return linkobjeto
    
});

/*const onlyVal= (link) => {
    return new Promise((resolve, reject)=>{
        fetch('https://es.wikipedia.org/wiksdi/Markdo.com')
        .then(resp => resolve(resp.status))
        .catch(err=> reject('fallo'))
    })
}*/

module.exports={
    unlink
}