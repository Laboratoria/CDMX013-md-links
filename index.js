const { argv } = require('node:process');
const { absolutePath } = require('./absolutePath');
console.log(absolutePath(argv));