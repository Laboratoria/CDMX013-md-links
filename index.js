//module.exports = () => { //..}};

const process = require('node:process');
const functions = require('./nodeMod.js');

let inputOfFilePath = process.argv[2];
const option = process.argv[3];

const path = functions.resolveToAbsolutePath(inputOfFilePath);
const fileExtension = functions.getFileExtension(path);

if(fileExtension === '.md'){
    if(option === '--validate'){
        let read = functions.readFile(path);
        //console.log(read)
        let descriptions = functions.getLinks(read, path);
        //console.log(description);
        let array = descriptions.map(element => functions.validateLinks(element));
        //console.log(array)
        let allRequests = Promise.all(array);
        allRequests.then(console.log)
    } else if(option === '--stats'){
        console.log('Here are the STATS!')
    } else if(option === '--validate--stats'){
        console.log('Validation + stats')
    } else{
        console.log('Wrong command! Please enter one of these options: --validate / -- stats / --validate--stats')
    }

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

// else if(option === null){
//     console.log('Please enter a command')
// }