const functions = require('./nodeMod.js');

const mdLinks = (givenPath, options) => {

    const path = functions.resolveToAbsolutePath(givenPath);
    const fileExtension = functions.getFileExtension(path);

    return new Promise((resolve, reject) =>{
        if(fileExtension === '.md'){
            if(options.validate === true && options.stats === false){ 

                let descriptions = functions.getLinks(path);
                let array = descriptions.map(element => functions.validateLinks(element));
                let allRequests = Promise.all(array);
                resolve(allRequests);

            } else if(options.validate === false && options.stats === true){

                let descriptions = functions.getLinks(path);
                let stats = functions.getStats(descriptions);
                resolve(stats);
                
            } else if(options.validate === true && options.stats === true){

                let descriptions = functions.getLinks(path);
                let array = descriptions.map(element => functions.validateLinks(element));
                let allRequests = Promise.all(array);
                let result = allRequests.then((res) => functions.statsAndValidation(res));
                resolve(result);

            } else if(options.validate === false && options.stats === false){

                let descriptions = functions.getLinks(path);
                resolve(descriptions);

            }else{

                resolve('Wrong command! Please enter one of these options: --validate / -- stats / --validate --stats');

            }
        } else{

            reject('Hey this is not a Markdown(.md) file!');

        }
    })

}

module.exports = { mdLinks }
