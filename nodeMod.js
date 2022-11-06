const fs = require('node:fs');
const axios = require('axios');
const path = require('node:path');
const chalk = require('chalk');

const resolveToAbsolutePath = (receivedPath) =>{
    let checkifPathIsAbsolute = path.isAbsolute(receivedPath);
  
    if(checkifPathIsAbsolute === true){
      return receivedPath
    } else if( checkifPathIsAbsolute === false){
      let newPath =  path.resolve(__dirname, receivedPath)
      return newPath
    }
  } 

const getFileExtension = (filePath) => path.extname(filePath);

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
            text: e[0].toString().replace('[', '').replace(']', ''),
            file: path,
        };
        description.push(object);
    })

    return description;
}

const validateLinks = (link) => {
    let request = axios.get(link.href);
    let object = request.then((response) => {
    return {href: link.href, text: link.text, path: link.file, StatusOfRequest: response.status, StatusText: response.statusText}
    }, (reject) => { return {href: link.href, text: link.text, path: link.file, StatusOfRequest: reject.toJSON().status, StatusText: reject.toJSON().message, Code:reject.toJSON().code}})
 return object
}

const getStats = (link) => {
    let unique = [];
    let repeated = [];
    let order = link.sort((a,b) => {
        if(a.href < b.href){
            return -1;
        } else if(a.href > b.href){
            return 1;
        } else{
            return 0;
        }
    });

    for(let i = 0; i <= order.length-1; i++){
      if(JSON.stringify(order[i]) != JSON.stringify(order[i+1])){
      unique.push(order[i]);
      }else{
      repeated.push(order[i]);
      }
    }    
    let stats = { total: link.length, unique: unique.length, repeated: repeated.length};

   return stats
  }

const statsAndValidation = (links) => {
    let statsOfLinks = getStats(links);
    let brokenLinks =  links.filter(e => e.StatusOfRequest != '200');
    let result = {total: links.length, unique: statsOfLinks.unique, broken: brokenLinks.length}
    return result
}

module.exports = { resolveToAbsolutePath, getFileExtension, getLinks, validateLinks, getStats, statsAndValidation };

