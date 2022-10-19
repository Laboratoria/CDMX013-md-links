const fs = require('fs');

module.exports.showDirContent = (dir) => {
    fs.readdir(dir, (err, files) => {
    files.forEach(file => {
       console.log(file);
    });
  });
};