
const { gettingLinks } = require('./gettingLinks.js');
const { validate } = require('./validate.js');


//////////////////////////////
function stadistics(array, options) { //array de objetos y option es un objeto con opciones validate 
//return new Promise((resolve)=>{
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
 //stadistics(array, {validation:true}).then(resultado=>console.log(resultado))

//console.log(stadistics(gettingLinks('./holis.md'), {validation:true}));