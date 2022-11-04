#!/usr/bin/env node
const process = require('node:process');
const { mdLinks }  = require('./index.js')
const [,, ...args] = process.argv



let inputOfFilePath = process.argv[2];
const option = process.argv[3];

mdLinks(inputOfFilePath, option)

