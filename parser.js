const readContent = require('./readFile');

const data = readContent.fileContent('README.md');
const regex = /(https{0,1}:\/\/.+?)[\s|"|)]{1}/gm;
let match;
const arr = [];

while ((match = regex.exec(data)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (match.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
        console.log(match[1]);
        console.log('-----------------------');

        arr.push(match[1]);
}
console.log(arr.sort());
console.log(arr.length);