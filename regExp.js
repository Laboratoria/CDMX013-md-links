const fs = require('fs');
const path = require('path')

const pathText = path.join(__dirname, './readme.md');
const readMe = fs.readFileSync(pathText, 'utf-8');
//console.log(readMe);

const regex = /\[(.+)\]\((https?:.+)\)/ig;
const linksArray = Array.from(readMe.match(regex))
console.log(linksArray);


module.exports = { linksArray }





