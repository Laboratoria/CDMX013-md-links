const fetch = require('./lib/fetch');
const parser = require('./lib/parser');


module.exports.mdLinks = (dir, option = {validate: false, stats: false}) => {
  const promise = new Promise((resolve) => {
    if (option.validate) resolve(fetch.validate(parser.parser(dir)));
    if (!option.validate) resolve(parser.parser(dir));
  });
  return promise;
};