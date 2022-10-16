import { checkRoutes, convertingToAbsoluteRoutes, routeExist } from './methods.js';
import { CLI } from './helper.js'
CLI();

const pathRelative = "./pruebasMD"
const pathAbsolute = '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD'
const file = '/Users/dsoo/Developer/CDMX013-md-links/pruebasMD/prueba.md'


//const mdLinks=(pathRelative) => {
const typeRoute = checkRoutes(pathRelative)
//console.log(x)
const routesOnlyAbsolutes = [];
if (typeRoute === false) {
    console.log('No soy absoluta')
    const absolutePath = convertingToAbsoluteRoutes(pathRelative);
    routesOnlyAbsolutes.push(absolutePath);
    console.log('ya soy absoluta')
} else {
    console.log('Yo ya era absoluta!!!')
    console.log(pathRelative)
    routesOnlyAbsolutes.push(pathRelative)
};

   if ( routeExist(...routesOnlyAbsolutes) === true) {
        console.log('El archivo existe');
const existPath= routesOnlyAbsolutes
console.log(existPath)
} else {
    console.log('GAME OVER');
}
//console.log(mdLinks)

