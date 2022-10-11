import process from 'node:process';
import fs from 'fs';

export const CLI = () => {
    console.log(process.argv)

}

export const readMyFile = () => {
     const data = fs.readFileSync("./pruebasMD/prueba.md", 'utf8')
     //const path = "./pruebasMD/prueba.md";
     console.log(data)
}


// fsIntentoDos.readFileSync, 'utf8', (pruebaFile, (err, data) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log(data.toString());
//     }
// })

// const mdLinks = require("md-links");

// mdLinks("./some/example.md")
//   .then(links => {
//     // => [{ href, text, file }, ...]
//   })
//   .catch(console.error);


//   fs.readFile('testFile.txt', 'utf8', function (error, data) {
//     if (error) {
//        console.log("Failed to read file!");
//        return error;
//     }
//     console.log(data);
//   });

