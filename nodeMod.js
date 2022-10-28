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
    const result = links.filter(element => element.match(/\]\((.*?)\)/));
    let description = [];

    result.forEach(e => {
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
    let request = axios.get(link.href[1]);
    let object = request.then((response) => {
    return {href: link.href[1], text: link.text[1], path: link.file, StatusOfRequest: response.status, StatusText: response.statusText}
    }) .catch((err) => { return console.log({href: link.href[1], text: link.text[1], path: link.file, StatusOfRequest: err})})

 return object
}
module.exports = { readFile,  getLinks, validateLinks };

//href: link.href[1], text: link.text[1], path: link.file, StatusOfRequest: err.response.status, StatusText: err.response.statusText
