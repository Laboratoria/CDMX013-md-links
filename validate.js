const fetch = require('node-fetch');
const fileReadme = './README.md';
const {linksArray } = require('./regExp.js');

linksArray.forEach(texto => {
    const splitText = texto.split('(');
    const linkText = splitText[0].replace('[', '').replace(']', '');
    const replaceText = splitText.pop().replace(')', '')
//return {href:replaceText, text:linkText, file: fileReadme}
    fetch(replaceText).then(response=>{
        if (response.status == '200') {
            console.log(response.status, 'ok', {href:replaceText, text:linkText, file: fileReadme}); 
        } else {
            console.log(response.status, 'fail' );
        } 
    }).catch( err =>{
        console.log('404', {href:replaceText, text:linkText, file: fileReadme});
    });
    /*fetch(replaceText).then(response => {
        console.log(response.status)
    });*/

});