const fs = require('fs');
const path = require('path');

const mdLinks = (dir, options) => {
  //Extension file
  const extensionFile = path.extname(dir);
  //Join two paths
  var joinPaths = path.join('/home/vanesa/Documents/developer/laboratoria', '/CDMX013-md-links');
  console.log('Joining paths: ' + joinPaths);
  //Read directory
  fs.readdir(__dirname, (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
  });
  //Read file
  fs.readFile(dir, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    console.log('The extension file is: ' + extensionFile);
  });
};

mdLinks('/home/vanesa/Documents/developer/laboratoria/CDMX013-md-links/things.txt', '');