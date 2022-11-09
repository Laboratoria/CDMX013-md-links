const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const fileReadme = './README.md';

const pathText = path.join(__dirname, './readme.md');
const readMe = fs.readFileSync(pathText, 'utf-8');
//console.log(readMe);

const regex = /\[(.+)\]\((https?:.+)\)/ig;
const linksArray = Array.from(readMe.match(regex))

const newArr =linksArray.map(texto => {
    const splitText = texto.split('(');
    const linkText = splitText[0].replace('[', '').replace(']', '');
    const replaceText = splitText.pop().replace(')', '')
return {href:replaceText, text:linkText, file: fileReadme}

    /*fetch(replaceText).then(response => {
        console.log(response.status)
    });*/

});
//console.log(linksArray);
console.log(newArr);




