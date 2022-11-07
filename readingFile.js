const fs = require('fs');
const path = require('path');
const md = require ('markdown-it')();
//(?:__|[*#])|\[(.*?)\]\(.*?\)
//[^!]\[.+\]\((https?:\/\/.+)\)

const pathText = path.join (__dirname, './readme.md');
const readMe = fs.readFileSync(pathText, 'utf-8');
console.log(readMe);

const selectLinks = (text) => {
    let results = md.render(text);
    console.log(results)
}
selectLinks(readMe)
