import fs from 'fs';
import pathLib from 'node:path';
import markdownLinkExtractor from 'markdown-link-extractor'

// const file = '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md'
// const pathRelative = "./pruebasMD"
//-------------------tipo de ruta y pasarla absoluta----------
 export const checkRoutes = (routes) => pathLib.isAbsolute(routes);
 export const convertingToAbsoluteRoutes = (routes) => pathLib.resolve(routes);
 export const routeExist = (routes) => fs.existsSync(routes);
 export const pathIsFile = (routes) => fs.statSync(routes).isFile();
 export const extFile = (routes) =>  pathLib.extname(routes);
 export const directoryPath = (routes) =>fs.lstatSync(routes, (true, false)).isDirectory();
 export const filesInDirectory = (routes) =>fs.readdirSync(routes);
 export const readOnlyFile =(routes) => fs.readFileSync(routes, 'utf8');
 export const stringFile = (routes) => routes.toString()
//  export const { links } = markdownLinkExtractor(file);
//  links.forEach(link => console.log(link));




// console.log(pathIsFile)

//     console.log(convertingToAbsolutePath)

//console.log('checkRoutes');
//------------version impura o algo asi--------
// const routesOnlyAbsolutes = [];
// const checkRoutes = pathLib.isAbsolute(file);
// console.log(checkRoutes);
// if (checkRoutes === false) {
//     console.log('No soy absoluta')
//     const convertingToAbsolutePath = pathLib.resolve(file);
//     console.log(convertingToAbsolutePath)
//     console.log('ya soy absoluta')
//     routesOnlyAbsolutes.push(convertingToAbsolutePath);
// } else {
//     routesOnlyAbsolutes.push(file)
//     console.log('Yo ya era absoluta!!!')
// };
// console.log(routesOnlyAbsolutes)

// const routesExist = [];
//-------------------existe la ruta----------
// if (fs.existsSync(...routesOnlyAbsolutes)) {
//     console.log('El archivo existe');
//     routesExist.push(...routesOnlyAbsolutes)
// } else {
//     console.log('GAME OVER');
// }
// const fileMD = [];
// console.log(...routesExist);
// console.log('¿será un archivo?');
// const pathIsFile = fs.statSync(...routesExist).isFile()
// console.log(pathIsFile)
// if (pathIsFile == true) {
//     const ext = pathLib.extname(...routesExist)
//     console.log(ext)
//     if (ext == '.md') {
//         fileMD.push(...routesExist)
//     }
// };
// console.log('¿será un directorio?');
// //-------------------es una carpeta----------S
// const directoryPath = fs.lstatSync(pathAbsolute, (true, false)).isDirectory()
// console.log(directoryPath)

// //-----------si es una carpeta extraer los archivos y paso sigueinte conocer su extension
// const pathAbsolute = '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD'
//  const routes = fs.readdirSync(pathAbsolute)
//  console.log(routes)
// routes.forEach(element => {
//     console.log(element)
//     const ext = pathLib.extname(element)
//     console.log(ext)
// });
// //-------------------If si es MD leerlo ----------
//  const file = '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md'

// const readFile = fs.readFileSync(file, 'utf8')
//  console.log(readFile)
// const { links } = markdownLinkExtractor(readFile);
//  links.forEach(link => console.log(link));
// const usandoMarked = marked(readMyFile, { sanitize: true })
// console.log(usandoMarked );
// -------------------Hay links? ----------

// -------------------extraer Links ----------
//  const stringFile = readFile.toString()

//  console.log(stringFile)

 //-------------------cortarlos en pedacitos y meterlas partes a un objeto [nombre del archivo con extension, [text] y http] ----------

