const fs = require('node:fs');

const getLinks = (path) =>{
    const docContent = fs.readFileSync(path).toString();
    const regex = /\[(.*?)\)/g
    const findLinks = docContent.match(regex);
    const links = findLinks.filter(element => element.includes('http'));
    let separate = [];
    let description = [];

    links.forEach(e => {
        separate.push(e.split('('));
    });
    separate.forEach(e => {
        let object = { 
            href: e[1].toString().replace(')', ''),
            text: e[0].toString().replace('[', '').replace(']', '').substring(0, 45),
            file: path,
        };
        description.push(object);
    })

    return description;
}

module.exports = { getLinks }