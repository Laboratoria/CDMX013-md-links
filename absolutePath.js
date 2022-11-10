const fs = require('fs')
const path = require('node:path');
const fileReadme = './README.md';
const { resolve } = require('path');

const absolutePath = (fileMd) => {
    try {
        if (fs.existsSync(fileMd)) {
            //file exists
            if (path.isAbsolute(fileMd) == false) {
                const absoPath = resolve(fileMd);
                return absoPath;

            } else {
                return fileMd
            }
        }
    } catch (err) {
        //console.error('tu archivo no es válido');
         return 'Tu archivo no es valido';
    }
}
//console.log(module);
module.exports = { absolutePath }
module.exports = { absoPath }