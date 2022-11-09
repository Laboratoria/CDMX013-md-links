const http = require("http");
const fs = require("fs");


const getObjetValidateFalse = (linksMdInFile) => {
  // console.log(linksMdInFile)
  const hrefLinks = linksMdInFile.filter(item => item.includes('http'));
  let separate = [];
  let description = [];
  hrefLinks.forEach(item => {
    separate.push(item.split('('));
});
separate.forEach(item => {
    let object = { 
        href: item[1].toString().replace(')', ''),
        text: item[0].toString().replace('[', '').replace(']', '').substring(0, 45),
       // file: linksMdInFile,
    };
    description.push(object);
})
console.log(description);
return description;

}
module.exports = {
    getObjetValidateFalse
}
// getHref();


