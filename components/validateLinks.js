const axios = require('axios');

const validateLinks = (link) => {
    let request = axios.get(link.href);
    let object = request.then((response) => {
    return {href: link.href, text: link.text, path: link.file, StatusOfRequest: response.status, StatusText: response.statusText}
    }, (reject) => { return {href: link.href, text: link.text, path: link.file, StatusOfRequest: reject.toJSON().status, StatusText: reject.toJSON().message.substring(0, 22), Code:reject.toJSON().code}})
 return object
}

module.exports = { validateLinks }