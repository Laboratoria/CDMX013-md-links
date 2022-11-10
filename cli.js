
const api = require('./api.js');
const [,, route] = process.argv;
const optVal = process.argv.includes('--validate');
const optStats = process.argv.includes('--stats');

api.mdLinks(route,
        {
        validate: optVal,
        stats: optStats
    })
    .then((result) => {
    /*     if(args.length === 0) {
            console.error('Ingrese la ruta de un archivo');
        } */
        console.log(result)
/*         if (optVal && optStats) {
            console.log (result);
        }
        if(optStats){
           
        }
        if(optVal){
            console.log(result)
        }else{
            console.log(result)
        } */
    });