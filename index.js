const path = require('path');
const folder = require('./readDir');


const mdLinks = (dir, options) => {
  //Extension file
  const extensionFile = path.extname(dir);

  //Join two paths
  const joinPaths = path.join('/home/Laboratoria/', './test');
  console.log('Joining paths: ' + joinPaths);
  
  //Read directory
  folder.showDirContent(__dirname);
};

mdLinks('README.md', '');