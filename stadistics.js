
const { gettingLinks } = require('./gettingLinks.js');
const { validate } = require('./validate.js');

const array = [
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\holis.md',
    status: 200,
    ok: 'ok'
  },
  {
    href: 'https://medium.com/laboratoria-developers/recursi%C3%B3n-o-recursividad-ec8f1a359727',
    text: 'Recursión o Recursividad - Laboratoria Developers',
    file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\README.md',
    status: 200,
    ok: 'ok'
  },
  {
    href: 'https://www.youtube.com/fulanitodetal/20202',
    text: 'How to Write a JavaScript Promise - freecodecamp ',
    file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\README.md',
    status: 404,
    ok: 'fail'
  }
]
//////////////////////////////

function stadistics(array, options) { //array de objetos y option es un objeto con opciones validate 

  let totalLinks = array.length;
  let brokenLinks = 0; // ok =fail 
  const links = array.map(element => element.href);   //console.log('links', links);
  let unique = new Set(links).size; //puede ser con set  para el tamañano no funciono con length
  let stats = {};

  if (options.validation) {
    array.forEach(eachObject => {
      if (eachObject.ok === 'fail') {
        brokenLinks++;      
        stats.total= totalLinks;
        stats.unique= unique;
        stats.broken= brokenLinks;
  }

})
}else if (!options.validation){
stats.total= totalLinks;
stats.unique= unique;
}
return stats;
}



module.exports = { stadistics }

// testArray
//console.log(stadistics(array, {validation:false})); 
 //console.log(stadistics(gettingLinks('./holis.md'), {validation:true}));
//console.log(stadistics(array, {validation:true}));
// console.log(stadistics(gettingLinks('./holis.md', {validation:false})))
//.then(resultado=>console.log(resultado))