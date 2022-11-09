const fs = require("fs");
const path = require("path");

const readDirAndGetMdFiles = (entryPath) => {
  const files = fs.readdirSync(entryPath); //lee los files del dir actual
  let mdFiles = [];
  // const files = fs.readdirSync('./prueba');
 // console.log(files);
  files.forEach((file) => {
    // console.log(`File name: ${file} | Extension type: ${path.extname(file)}`);
    if(path.extname(file)===".md") {
      mdFiles.push(file);
    }
    // if (fs.statSync(file).isDirectory()) {
    //   console.log(file);
    //   readDirAndGetMdFiles(path.join(entryPath, file)).forEach((item)=>mdFiles.push(path.join(entryPath, file, item)))
    // };

  });
   console.log(mdFiles);
  return mdFiles;
};
// readDirAndGetMdFiles('./prueba');
module.exports = {
  readDirAndGetMdFiles
}





// fs.readdir('../prueba', (error, files) => {
//     if(error) {
//         throw error;
//     };
// console.log(files);
// });
