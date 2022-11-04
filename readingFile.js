
const fs = require('fs');
const path = require('path');

const pathText = path.join (__dirname, './readme.md');
const readMe = fs.readFileSync(pathText, 'utf-8');
console.log(readMe);

