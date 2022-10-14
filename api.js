import fs from 'fs';
import pathLib from 'node:path';
import process from 'node:process';


const path = "./pruebasMD"
const pathAbsolute = '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD'
const file = '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md'
//const options = { a: 'validate--', b:' estadistic', c: 'a & b' }//revisar como hacer un objeto

//-------------------tipo de ruta y pasarla absoluta----------
const routesOnlyAbsolutes = [];
const checkRoutes = pathLib.isAbsolute(file);
console.log(checkRoutes);
if (checkRoutes === false) {
    console.log('No soy absoluta')
    const convertingToAbsolutePath = pathLib.resolve(file);
    console.log(convertingToAbsolutePath)
    console.log('ya soy absoluta')
    routesOnlyAbsolutes.push(convertingToAbsolutePath);
} else {
    routesOnlyAbsolutes.push(file)
    console.log('Yo ya era absoluta!!!')
};
console.log(routesOnlyAbsolutes)

const routesExist = [];
//-------------------existe la ruta----------
if (fs.existsSync(...routesOnlyAbsolutes)) {
    console.log('El archivo existe');
    routesExist.push(...routesOnlyAbsolutes)
} else {
    console.log('GAME OVER');
}
const fileMD = [];
console.log(...routesExist);
console.log('¿será un archivo?');
const pathIsFile = fs.statSync(...routesExist).isFile()
console.log(pathIsFile)
if (pathIsFile == true) {
    const ext = pathLib.extname(...routesExist)
    console.log(ext)
    if (ext == '.md') {
        fileMD.push(...routesExist)
    }
};
console.log('¿será un directorio?');
//-------------------es una carpeta----------Será necesario este paso
// const directoryPath=  fs.lstatSync(pathAbsolute, options).isDirectory()
//     console.log(directoryPath)

//-----------si es una carpeta extraer los archivos y paso sigueinte conocer su extension
const routes = fs.readdirSync(path)
console.log(routes)
routes.forEach(element => {
    console.log(element)
    const ext = pathLib.extname(element)
    console.log(ext)
});

//-------------------If si es MD leerlo ----------

const readMyFile = fs.readFileSync(...fileMD, 'utf8')
console.log(readMyFile)
//-------------------Hay links? ----------
//-------------------extraer Links ----------
const stringFile = readMyFile.toString
console.log(stringFile)

//-------------------cortarlos en pedacitos y meterlas partes a un objeto [nombre del archivo, [text]y http] ----------
console.log(process.argv[2])