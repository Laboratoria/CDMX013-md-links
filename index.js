const fs = require('fs');
const path = require('path');

const mdLinks = (dir, options) => {
  const extensionFile = path.extname(dir);
  fs.readFile(dir, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    console.log('The extension file is: ' + extensionFile);
  });
};

mdLinks('/home/vanesa/Documents/developer/laboratoria/CDMX013-md-links/README.md', '');