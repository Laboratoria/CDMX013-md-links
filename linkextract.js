const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const axios = require("axios")
// const functionJsDom = jsdom.JSDOM;

const extract = (text) => {
  let result = md.render(text);
  console.log(result);

  const dom = new JSDOM(result);
  const query = dom.window.document.querySelectorAll("a");
  const arrayLinks = Array.apply(null, query);
  // console.log(arrayLinks);
  const newarray = arrayLinks.map((a) => {
    return a.getAttribute("href");
  })
  const arrayClean = newarray.filter((link) => {
    if (link.startsWith("http")) {
      return true
    } else {
      return false
    }
  })
  console.log(arrayClean);


  // arrayLinks.forEach(console.log);
  // como de los elementos del array sacar el link
}

//coomo acceder al atributo href de la etiqueta a

module.exports = {
  extract
}

const validateLink = (link) => {
  //peticion http
  //petiucion get
  //valido o no
  // regresar la promeas de ese resultado xq es asincrona
}

// const validateLinks = (file) =>{

// new Promise ((resolve, reject) =>{
//   fs.readFile(file, (err, data) ()=>{

//   } )
// })

// }