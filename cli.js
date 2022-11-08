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
            console.log(`${chalk.cyan(inputOfFilePath)} ${chalk.magenta(element.href)} ${chalk.gray(element.text)} `);
        });

       console.log(` 
       ${chalk.bgRed(' Other commands: ')} ${chalk.yellow('--validate / -- stats / --validate --stats')} `);

    } else if(options.validate === false && options.stats === true){
        
            console.log(`
                ${chalk.magenta('► ► ► ► ► ► ► ► ► ► ► ► ► ► ► ► ► ► ► ► ')} STATS ${chalk.magenta(' ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄')}
                                
                            ${chalk.cyan('Total:')} ${res.total}
                            ${chalk.yellow('Unique:')} ${res.unique}
                            ${chalk.green('Repeated:')} ${res.repeated}

                ${chalk.magenta('○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ')}
            `)

    } else if(options.validate === true && options.stats === false){

        res.forEach(element => {
            console.log(`${chalk.cyan(inputOfFilePath)} ${chalk.magenta(element.href)} ${chalk.white(element.StatusText)} ${chalk.yellow(element.StatusOfRequest)} ${chalk.gray(element.text)} `);
        });
        
    } else if(options.validate === true && options.stats === true){

         console.log(`
                ${chalk.magenta('► ► ► ► ► ► ► ► ► ► ► ► ► ► ► ► ► ')} STATS & VALIDATE ${chalk.magenta(' ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄ ◄')}
                                
                            ${chalk.cyan('Total:')} ${res.total}
                            ${chalk.yellow('Unique:')} ${res.unique}
                            ${chalk.red.bold('Broken:')} ${res.broken}

                ${chalk.magenta('○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○')}
            `)

    }
    })
.catch((err) => console.log(`
   ${chalk.magenta('▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄')}

                                ${chalk.bgRed(' ERROR: ')} ${chalk.white.bold(err)} 

   ${chalk.magenta('▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄ ▀ ▄')}
 `))

