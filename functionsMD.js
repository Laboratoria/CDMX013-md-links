const fs = require('fs');
var path = require('path');



const pathE = './README.md';

// verify if a file exists in node.js  //done
function checkingExistentPath(pathE) {
    fs.existsSync(pathE)
    console.assert(fs.existsSync(pathE), 'El archivo NO existe');
}

module.exports = { checkingExistentPath }
//File test run
// checkingExistentPath(pathE);