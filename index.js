const fn = require ('./fn.js');

// not absolute ./README.md
// absolute     /Users/jazmin/Downloads/Laboratoria/Mex013/MD_links_S/CDMX013-md-links-S/README.md


// console.log(fn.isPathAbsolute('/Users/jazmin/Downloads/Laboratoria/Mex013/MD_links_S/CDMX013-md-links-S/README.md'));

console.log(fn.convertPathToAbsolute('./README.md'));

// console.log(fn.readFile("text.txt"));