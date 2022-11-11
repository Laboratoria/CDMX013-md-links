const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// const functionJsDom = jsdom.JSDOM;

const extract = (text) => {
  let result = md.render(text);
  // console.log(result);

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
  return arrayClean;
}

//coomo acceder al atributo href de la etiqueta a

module.exports = {extract} // se exporta

// const validateLink = (link) => {
  //peticion http
  //petiucion get
  //valido o no
  // regresar la promeas de ese resultado xq es asincrona
  // const linkPrueba = 'https://www.youtube.com/watch?v=Lub5qOmY4JQ'
  // axios.get(linkPrueba)
  // .then((response) => {
  //   const linkValidate ={
  //     href: linkPrueba,
  //     statusCode: response.status,
  //     status: response.statusText,
  //     // data: response.data,
  //   }

  //   console.log(linkValidate);
  //   //crear objeto (status mess, status code, responseUrl)
  // })
  // .catch((error) => {
  //   console.log(error);
  // });

  


// validateLink();



// const validateLinks = (file) =>{

// new Promise ((resolve, reject) =>{
//   fs.readFile(file, (err, data) ()=>{

//   } )
// })

// }

//iterar links