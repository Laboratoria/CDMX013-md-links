//module.exports = () => { //..}};

const process = require('node:process');
const { argv } = require('node:process');
const path = require('node:path');
const functions = require('./nodeMod.js');
const axios = require('axios');

let inputOfFilePath = process.argv[2].toString();
let fileExtension = path.extname(inputOfFilePath);
console.log(fileExtension);

if(fileExtension === '.md'){
    let read = functions.readFile(inputOfFilePath);
    let description = functions.getLinks(read, inputOfFilePath);
   console.log(description);
//    description.forEach(e => {
//         functions.validateLinks(e.href[1]);
//    })
} else{
    console.log('This is not a Markdown(.md) file');
}

// READ FILES OF A DIRECTORY
/*let url = process.argv[2];
let filenames = fs.readdirSync(url).toString().split(',');  //Convertido a un array
console.log("\nCurrent filenames in directory:");
console.log(filenames); */

// let array = ['https://user-images.githubusercontent.com/110297/135544666-4efa54f1-4ff6-4c4c-b398-6df04ef56117.jpg', 'zzzzz', 'hhhhh', 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids', 'https://css-tricks.com/snippets/css/complete-guide-grid/']
// const links = array.filter(word => word.includes('http'));
// console.log(links);