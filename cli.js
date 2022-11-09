const links = require('./index');
const getLinks = require('./lib/parser');
const { getValidateStats, getStats } = require('./lib/stats');
const [, , ...[path, validate, stats]] = process.argv;

if (!path) {
    console.log('Please enter path and options');
    console.log('Only these options are allowed:\n--validate\n--stats\n--validate --stats');
}

if(path && !validate){
    console.log(getLinks.parser(path));
}

if(path && validate === '--validate'){
    links.mdLinks(path, { validate: true })
    .then(arr => ((stats === '--stats') ? getValidateStats(arr) : arr))
    .then(data => console.log(data));
}

if (path && (validate === '--stats' && !stats)) {
    links.mdLinks(path, { validate: false })
    .then(arr => getStats(arr))
    .then(data => console.log(data));
}
if(path && (validate === '--stats' && stats === '--validate')){
    console.log('Only these options are allowed:\n--validate\n--stats\n--validate --stats');
}