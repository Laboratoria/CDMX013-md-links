//module.exports = () => { //..}};

const process = require('node:process');
const { argv } = require('node:process');
const path = require('node:path');
const functions = require('./nodeMod.js');
const axios = require('axios');

let inputOfFilePath = process.argv[2].toString();
let filePath = '';
let fileExtension = path.extname(inputOfFilePath);
console.log(fileExtension);

// //console.log(linksInformation);
let description = [];

if(fileExtension === '.md'){
    let read = functions.readFile(inputOfFilePath);
    //console.log(read);
    filePath = inputOfFilePath;
    console.log('PATH OF THE md FILE: ' + inputOfFilePath);
    const links = read.filter(word => word.includes('http'));
    //let regex = /\((.*?)\)/g;
   // console.log(links);
    let obtainedLinks;
    
    links.forEach(e => {
        let object = { 
            href: functions.cutLinkText(e),
            text: functions.cutDescriptionText(e).replace("[", "").replace("]", ""),
            file: inputOfFilePath
        };
        description.push(object);
    });
   console.log(description);
   description.forEach(e=>{
        axios.get(e.href[1])
        .then((response) =>  // handle success
            console.log(` href: ${e.href[1]}
            Status of request: ${response.status} Status text: ${response.statusText}`)
        )
        .catch((error) =>
            // handle error
            console.log(error.status)
        )
   })
// axios.get(description[0].href[1])
// .then((response) =>  // handle success
//   console.log(` href: ${description[0].href[1]}
//   Status of request: ${response.status} Status text: ${response.statusText}`)
// )
// .catch((error) =>
//   // handle error
//   console.log(error)
//   )
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