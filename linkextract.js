// importación para leer el archivo en html
const MarkdownIt = require('markdown-it')
const md = new MarkdownIt()
// sacar unicamente links
const jsdom = require('jsdom')
// exportar
const { JSDOM } = jsdom

// funcion que extrae el texto del archivo
const extract = (text) => {
  // se refleja todo el texto html
  const result = md.render(text)
  // trae todos los nodos del html
  const dom = new JSDOM(result)
  // especifica que solo seleccione etiquetas a que son las de link
  const query = dom.window.document.querySelectorAll('a')
  // convierte la lista en un array
  const arrayLinks = Array.apply(null, query)
  // console.log(query)
  // se guarda en un nuevo array para poder iterar en el con map y devuelve las que tiene atributo href, ya que no todas tienen link
  const newarray = arrayLinks.map((a) => {
    return a.getAttribute('href')
  })
  // se vuelve a guardar en un nuevo array y filtra para que solo sean los que empiezan con http (enlaces externos)
  const arrayClean = newarray.filter((link) => {
    if (link.startsWith('http')) {
      return true
    } else {
      return false
    }
  })

  // return para que guarde la información en la función sin ncesidad de poner console.log
  return arrayClean
}

// coomo acceder al atributo href de la etiqueta a

module.exports = { extract } // se exporta
