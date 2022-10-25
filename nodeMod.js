//const fs = require('node:fs/promises');
const fs = require('node:fs');

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

module.exports = { readFile, cutDescriptionText, cutLinkText };
