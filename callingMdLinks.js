const callMdLinks = require('./index');

callMdLinks.mdLinks('./dirExample/other.md', {validate:true}).then((result) => {
    console.log(result);
})
.catch(console.error);