const fs = require('fs');

module.exports.fileContent = (dir) => {
    try {
        const read = fs.readFileSync(dir, 'utf8');
        return read;
    } catch (err) {
        console.error(err);
    }
};