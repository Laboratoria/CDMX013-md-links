const getObject=(linksMdInFile, entryFile)=> {
    const hrefLinks = linksMdInFile.filter(item => item.includes('http'));
    let separateHrefAndText = [];
    let objectValidateFalse = [];
    hrefLinks.forEach(item => {
    separateHrefAndText.push(item.split('('));
    });
   
    separateHrefAndText.forEach(item => {
        let object = {
            href: item[1].toString().replace(')', ''),
            text: item[0].toString().replace('[', '').replace(']', '').substring(0, 49),
            file: entryFile,
        };
        objectValidateFalse.push(object);
       
    });
    return objectValidateFalse;
}



module.exports = { getObject }


 
