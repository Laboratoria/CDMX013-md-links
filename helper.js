import process from 'node:process';
import fs from 'fs';
import pathLib from 'node:path';


export const CLI = () => {
    console.log(process.argv)

}
const directory = 'Users/dsoo/Developer/CDMX013-md-links/pruebasMD';
//export const readMyFile = (route,(err,data)) => {
export const readMyFile = () => {
    const data = fs.readFileSync("./pruebasMD/prueba.md", 'utf8')
    console.log(data)
    // const files = fs.readdir(directory);
    // console.log(files);
}

const path = "./pruebasMD"
const panthAbsolute='/Users/dsoo/Developer/CDMX013-md-links/pruebasMD'

const comprobandoRuta = pathLib.isAbsolute(panthAbsolute);
console.log(comprobandoRuta);
const routes = fs.readdirSync(path)
console.log(routes)


