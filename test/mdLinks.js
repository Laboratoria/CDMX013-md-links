const chalk = require('chalk'); //colores
const fs = require('fs').promises;

async function main () {
    await findFiles('test');
}

main ();

async function findFiles(folderName) {
    const mineFiles = await fs.readdir(folderName);
    console.log(mineFiles);
}