const { closeSync } = require('fs')
const { validaLinks } = require('./validateLinks')

const validation = (links) => {

    let allLinks = links.map(link => {
        return validaLinks(link.href).then(respuesta => {
            link.status = respuesta
            if (respuesta < 300) {
                link.message = 'ok'
            } else {
                link.message = 'fail'
            }
            // stauts code
            return link
        }).catch(err => {
            link.status = err

            // status code
            return link
        })

    })
    return new Promise((resolve, reject) => {
        Promise.all(allLinks).then(fin => {
            resolve(fin)
        });
    });
}


module.exports = {
    validation
}