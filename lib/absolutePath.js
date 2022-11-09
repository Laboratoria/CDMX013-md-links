const path = require('path');

module.exports.isAbs = (dir) => {
    if(path.isAbsolute(dir)){
        console.log(dir);
        return dir;
    }
    return path.join(process.cwd(), dir);
};