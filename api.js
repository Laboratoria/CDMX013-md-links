import fs from 'fs';
import pathLib from 'node:path';
import process from 'node:process';


const path = "./pruebasMD" 
const pathAbsolute = '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD'
const file = '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md'
//const options = { a: validate--, b: estadistic, c: a & b }//revisar como hacer un objeto

//-------------------tipo de ruta y pasarla absoluta----------
const checkRoutes = pathLib.isAbsolute(path)
console.log(checkRoutes);
if (checkRoutes === false) {
    console.log('No soy absoluta')
    const convertingToAbsolutePath = pathLib.resolve(path)
    console.log(convertingToAbsolutePath)
    console.log('ya soy absoluta')
} else {
    console.log('Yo ya era absoluta!!!')
};

//-------------------existe la ruta----------
if (fs.existsSync(path)) {
    console.log("El archivo EXISTE!");
} else {
    console.log("El archivo NO EXISTE!");
}

//-------------------es un archivo----------
const pathIsFile = fs.statSync(file).isFile()
    console.log(pathIsFile)

//-------------------es una carpeta----------
// const directoryPath = fs.lstatSync(pathAbsolute, opciones)
// console.log(directoryPath)
// const pathIsDirectory =  fs.lstatSync(pathAbsolute, options).isDirectory()
//     console.log(pathIsDirectory)

//-----------si es una carpeta extraer los archivos y paso sigueinte conocer su extension


//-------------------conocer la extension del archivo----------
const routes = fs.readdirSync(path)
console.log(routes)
routes.forEach(element => {
    console.log(element)
    const ext = pathLib.extname(element)
    console.log(ext)
});

//-------------------If si es MD leerlo ----------

const readMyFile = fs.readFileSync("./pruebasMD/prueba.md", 'utf8')
console.log(readMyFile)
//-------------------Hay links? ----------



console.log(process.argv[2])