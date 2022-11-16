#!/usr/bin/env node

const { getMdLinks } = require('./index.js')

const[,, ...args] = process.argv

//console.log(`Hello world ${args}`);
//////////////////
const validateValue = args.includes('--validate');
const statsValue = args.includes('--stats');

getMdLinks(args[0], {validate:validateValue, stats: statsValue }).then(res=>console.log(res)) 



//module.exports={ CLI }

// md-links C:/Users/ylera/Desktop/Labo2/CDMX013-md-links/holis.md
// md-links C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\holis.md --validate