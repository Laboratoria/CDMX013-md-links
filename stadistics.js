//recibo un array de objetos 
//acceso a la propiedad del objeto 
//si ok es fail es por que esta roto (¿los rotos se contemplan para repetidos?)
// si ok es ok es poque esta valido 

// uno con el resto 
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
    href: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)',
    text: 'How to Write a JavaScript Promise - freecodecamp ',
    file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\README.md',
    status: 404,
    ok: 'fail'
  },
  {
    href: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)',
    text: 'How to Write a JavaScript Promise - freecodecamp ',
    file: 'C:\\Users\\ylera\\Desktop\\Labo2\\CDMX013-md-links\\README.md',
    status: 404,
    ok: 'fail'
  }
]


// function stadistics(array) { //array de objetos

//   let totalLinks = array.length;
//   let brokenLinks = 0; // ok =fail 

//   const links = array.map(element => element.href)
//   //console.log('links', links);
//   let unique = new Set(links).size; //puede ser con set  para el tamañano no funciono con length

//   array.forEach(eachObject => {
//     // console.log(eachObject.ok,eachObject.status);
//     if (eachObject.ok === 'fail') {
//       brokenLinks++;
//       //log(brokenLinks)
//     }
//   });

//   console.log('stats', {
//     total: totalLinks,
//     unique: unique,
//     broken: brokenLinks
//   });

//   return {
//     total: totalLinks,
//     unique: unique,
//     broken: brokenLinks
//   }
// }




//////////////////////////////
function stadistics(array, options) { //array de objetos y option es u7n objeto con opciones validate y 

  let totalLinks = array.length;
  let brokenLinks = 0; // ok =fail 
  const links = array.map(element => element.href);   //console.log('links', links);
  let unique = new Set(links).size; //puede ser con set  para el tamañano no funciono con length
  let stats = {};


  if (options.validation) {

    array.forEach(eachObject => {
      if (eachObject.ok === 'fail') {
        brokenLinks++;
      
        stats.total= totalLinks,
        stats.unique= unique,
        stats.broken= brokenLinks};
  });
}
        stats.total= totalLinks,
        stats.unique= unique,
  console.log(stats);
return stats;
}

// testArray
stadistics(array, {validation:false, stats:true});
