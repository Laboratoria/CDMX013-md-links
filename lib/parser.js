const directory = require('./readDir');
const readContent = require('./readFile');

module.exports.parser = (dir) =>{
    const arr = [];
    directory.recursion(dir).forEach((mdFile) => {
        const data = readContent.fileContent(mdFile);
        const regex = /(\[.*\])(\(https{0,1}:\/\/.+?)[\s|"|)]{1}/gm;
        let match;
        
        while ((match = regex.exec(data)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (match.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            
            const obj = {
                href: match[2].slice(1),
                text: match[1].slice(1, match[1].length-1),
                file: mdFile
            };
            arr.push(obj);
        }
    });
    return arr;
}