const functions = require('./nodeMod');
const { getLinks } = require('./components/getLinks');
const { validateLinks } = require('./components/validateLinks');
const { getStats } = require('./components/getStats');
const { statsWithValidation } = require('./components/statsWithValidation');

const mdLinks = (givenPath, options) => {

    const path = functions.resolveToAbsolutePath(givenPath);
    const fileExtension = functions.getFileExtension(path);

    return new Promise((resolve, reject) =>{
        if(fileExtension === '.md'){
            if(options.validate === true && options.stats === false){ 

                let descriptions = getLinks(path);
                let array = descriptions.map(element => validateLinks(element));
                let allRequests = Promise.all(array);
                resolve(allRequests);

            } else if(options.validate === false && options.stats === true){

                let descriptions = getLinks(path);
                let stats = getStats(descriptions);
                resolve(stats);
                
            } else if(options.validate === true && options.stats === true){

                let descriptions = getLinks(path);
                let array = descriptions.map(element => validateLinks(element));
                let allRequests = Promise.all(array);
                let result = allRequests.then((res) => statsWithValidation(res, getStats()));
                resolve(result);

            } else if(options.validate === false && options.stats === false){

                let descriptions = getLinks(path);
                resolve(descriptions);

            }
        } else{

            reject('Hey this is not a Markdown(.md) file!');

        }
    })

}

module.exports = { mdLinks }
