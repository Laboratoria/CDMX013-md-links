const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();
const jsdom = require("jsdom");
const {JSDOM} = jsdom;
// const functionJsDom = jsdom.JSDOM;
  


const extract = (text) => {
  let result = md.render(text);
  console.log(result);

  const dom = new JSDOM(result);
  const query = dom.window.document.querySelectorAll("a");
  const arrayLinks = Array.apply(null, query);
  arrayLinks.forEach(console.log);
  // como de los elementos del array sacar el link
}



module.exports = {
  extract
}