//const fs = require('node:fs/promises');
const fs = require('node:fs');
const axios = require('axios');
const path = require('node:path');

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
    let cuttedString = str.match(/\]\((.*?)\)/);
    return cuttedString;
};

const getLinks = (docContent, path) =>{
    const links = docContent.filter(word => word.includes('http'));
    let description = [];

    links.forEach(e => {
        let object = { 
            href: e.match(/\]\((.*?)\)/),
            text: e.match(/\[(.*?)\]/),
            file: path,
        };
        description.push(object);
    });

    return description;
}

const validateLinks = (link) => {
    axios.get(link)
   .then((response) =>  // handle success
        console.log(` href: ${link}
        Status of request: ${response.status} Status text: ${response.statusText}`)
     )
     .catch((error) =>
        // handle error
        console.log(` href: ${link} 
        ----------------------- ${error}-----------------------------
        Status of request: ${error.response.status} Status text: ${error.response.statusText}`)
    )
}

module.exports = { readFile,  getLinks, validateLinks };
