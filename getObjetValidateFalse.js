const http = require("http");
const fs = require("fs");



function getObjetValidateFalse(linksMdInFile, entryFile) {
    //console.log(linksMdInFile)
    const hrefLinks = linksMdInFile.filter(item => item.includes('http'));
    let separateHrefAndText = [];
    let ObjectValidateFalse = [];
    hrefLinks.forEach(item => {
        separateHrefAndText.push(item.split('('));
    });
    separateHrefAndText.forEach(item => {
        let object = {
            href: item[1].toString().replace(')', ''),
            text: item[0].toString().replace('[', '').replace(']', '').substring(0, 50),
            file: entryFile,
        };
        // console.log(separateHrefAndText)
        ObjectValidateFalse.push(object);
    });
    console.log(ObjectValidateFalse);
    return ObjectValidateFalse;

}
module.exports = {
    getObjetValidateFalse
}



