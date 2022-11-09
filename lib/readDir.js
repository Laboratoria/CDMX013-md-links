const fs = require('fs');
const path = require('path');
const route = require('./absolutePath');

module.exports.recursion = (dir) => {
  const list = [];

  const array = (file) => {
    
    if (!fs.statSync(file).isDirectory()) {
      if (path.extname(file) === '.md') {
        list.push(file);
      } else {
        console.log("\n I'm sorry " +  file + ' is not an "md" file extension');
      }
      return list;
    }
    fs.readdirSync(file, 'utf-8').forEach(doc => array(path.join(file, doc)));
    return list;
  };

  array(route.isAbs(dir));
  //console.log(list);
  return list;
};