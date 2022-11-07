const fs = require('fs');
const path = require('path');
//const fileReadme = './README.md';

const pathText = path.join(__dirname, './readme.md');
const readMe = fs.readFileSync(pathText, 'utf-8');
//console.log(readMe);

const regex = /\[(.+)\]\((https?:.+)\)/ig;
console.log(Array.from(readMe.match(regex)));
      
   


