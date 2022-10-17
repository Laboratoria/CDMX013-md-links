import {
    checkRoutes, convertingToAbsoluteRoutes, routeExist, pathIsFile, filesInDirectory,
    readOnlyFile, extFile
} from './methods.js';
import { CLI } from './helper.js'
import fs from 'fs';
CLI();

const pathRelative = "./pruebasMD"
const pathAbsolute = '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD'
const file = '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/README.md'
const fileRelative = './prueba.md'

const mdLinks = (path) => {
    if (checkRoutes(path) === false) {
        console.log('No soy absoluta')
        path = convertingToAbsoluteRoutes(path);
        console.log('ya soy absoluta')
    }

    if (routeExist(path) === false) {
        return 'GAME OVER'
    };

    if (pathIsFile(path) === false) {
        console.log('es un directorio');
        const filesInPathDirectory = filesInDirectory(path)
        path = filesInPathDirectory;
        path.forEach(element => {
            if (extFile(element) === '.md') {
                console.log('solo somos archivos MD')
                path = convertingToAbsoluteRoutes(element)
                console.log(path)
                return path
            }
        })
    }
    (extFile(path) === '.md')
    return path
};
console.log(mdLinks(pathRelative))

// const selectFileMD= (path)=>{
//     path.forEach(element =>{
//       if(extFile (element)=== '.md'){
//         console.log('solo somos archivos MD')
//         console.log(element)
//       }
//     })

// }
// console.log(selectFileMD(mdLinks(file)))

// const readdingFileMD = 
//   //  readOnlyFile(path)
//     fs.readFileSync(path, 'utf8');
// 
//  console.log (readdingFileMD(fileRelative))

const readFileMD = (path) => {
    fs.readFileSync(path, 'utf8')
}
console.log (readFileMD(file))
//  const { links } = markdownLinkExtractor(readFile);
//   links.forEach(link => console.log(link));

//  const files= mdLinks(pathRelative)

