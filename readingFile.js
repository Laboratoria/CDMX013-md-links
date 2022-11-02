const fs = require('fs')
const readingText = fs.readFileSync('./README.md', 'utf-8');
console.log(readingText);