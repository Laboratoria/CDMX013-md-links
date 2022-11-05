#!/usr/bin/env node

const process = require('node:process');
const { mdLinks }  = require('./index.js');
const [,, ...args] = process.argv;
const chalk = require('chalk');

let inputOfFilePath = process.argv[2];
const options = { validate: [,, ...args].includes('--validate'), stats:  [,, ...args].includes('--stats') }

mdLinks(inputOfFilePath, options)
.then((res) => {
    if(options.validate === false && options.stats === false){
        res.forEach(element => {
            console.log(element.href);
        });
    } else if(options.validate === false && options.stats === true){
        
            console.log(chalk.cyan(`
            total: ${res.total}
            unique: ${res.unique}
            repeated: ${res.repeated}
            `))
        
    }

    })
.catch(console.log)

