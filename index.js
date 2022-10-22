//module.exports = () => { //..}};

const process = require('node:process');
const { argv } = require('node:process');
const fs = require('node:fs'); 
const path = require('node:path');
const functions = require('./nodeMod.js');

let inputOfFilePath = process.argv[2].toString();
let filePath = '';
let fileExtension = path.extname(inputOfFilePath);
console.log(fileExtension);

let linksInformation = [{ 
    href: '',
    text: '',
    file: inputOfFilePath
}];

//console.log(linksInformation);
let description = [];
let linksUrl = [];
if(fileExtension === '.md'){
    let read = functions.readFile(inputOfFilePath);
    console.log(read);
    filePath = inputOfFilePath;
    console.log('PATH OF THE md FILE: ' + inputOfFilePath);
    const links = read.filter(word => word.includes('http'));
    console.log(links);
    let obtainedLinks;

    links.forEach(e => {
        let obtainedDescription = functions.cutDescriptionText(e);
        description.push(obtainedDescription);

        let obtainedLinks = functions.cutLinkText(e);
        linksUrl.push(obtainedLinks)
    });
        console.log(description);
        console.log(linksUrl);
} else{
    console.log('This is not a Markdown(.md) file');
}


//metodo que encuentre la coincidencia
// READ FILES OF A DIRECTORY
/*let url = process.argv[2];
let filenames = fs.readdirSync(url).toString().split(',');  //Convertido a un array
console.log("\nCurrent filenames in directory:");
console.log(filenames); */

// let array = ['https://user-images.githubusercontent.com/110297/135544666-4efa54f1-4ff6-4c4c-b398-6df04ef56117.jpg', 'zzzzz', 'hhhhh', 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids', 'https://css-tricks.com/snippets/css/complete-guide-grid/']
// const links = array.filter(word => word.includes('http'));
// console.log(links);