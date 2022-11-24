const fs = require("fs");

function getObjetValidateFalse(linksMdInFile, entryFile) {
    // console.log(linksMdInFile)
    const hrefLinks = linksMdInFile.filter(item => item.includes('http'));
    //console.log(hrefLinks)
    let separateHrefAndText = [];
    let objectValidateFalse = [];
    hrefLinks.forEach(item => {
    separateHrefAndText.push(item.split('('));
    });
    // console.log(separateHrefAndText)
   
    separateHrefAndText.forEach(item => {
        let object = {
            href: item[1].toString().replace(')', ''),
            text: item[0].toString().replace('[', '').replace(']', '').substring(0, 49),
            file: entryFile,
        };
        // console.log(separateHrefAndText)
        objectValidateFalse.push(object);
       
    });
    
    // console.log(ObjectValidateFalse);
    return objectValidateFalse;

}



module.exports = { getObjetValidateFalse }



