const {getLinks} = require('./utils/getLinks');
const {getObject} = require('./utils/getObject');
const {validate} = require('./utils/validate');
//const { readDir } = require("./readDir");
//const { readFile } = require("./readFile");
const process = require('process');

const mdlinks = ()=>{
    const file = process.argv[2];
    return new Promise((resolve, reject)=>{
    const links=getLinks(file);
    const objects = getObject(links, file);

    validate(objects)
    .then(response=>resolve(response))
    .catch(err=>reject(err))
    })
} 

mdlinks().then(res=>console.log(res))


