//const fs = require('node:fs/promises');
const fs = require('node:fs');
const axios = require('axios');

const readFile = (filePath) => {
    let read = fs.readFileSync(filePath).toString().split('\r');
    return read;
};

const cutDescriptionText = (str) =>{
    let firstBracket = str.lastIndexOf("[");
    let secondBracket = str.lastIndexOf("]") +1;
    let cuttedString = str.substring(firstBracket, secondBracket);
    return cuttedString;
};

const cutLinkText = (str) =>{
    let cuttedString = str.match(/\((.*?)\)/);
    return cuttedString;
};

const validateLinks = (link) => {
    axios.get(link)
   .then((response) =>  // handle success
        console.log(` href: ${link}
        Status of request: ${response.status} Status text: ${response.statusText}`)
     )
     .catch((error) =>
        // handle error
        console.log(error.status)
    )
}

module.exports = { readFile, cutDescriptionText, cutLinkText, validateLinks };
