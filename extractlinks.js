
const MarkdownIt = require('markdown-it') //leer RCHIVOS EN HTML
const md = new MarkdownIt()
const jsdom = require('jsdom')  //CREA UNA LISTA DE NODOS
const { JSDOM } = jsdom

const extractLinks = (text) => {
  const result = md.render(text)
  const dom = new JSDOM(result)
  const query = dom.window.document.querySelectorAll('a')
  const arrayLabels = Array.apply(null, query)
  const newarray = arrayLabels.map((href) => {
    return href.getAttribute('href')
  })
  const arrayLinks = newarray.filter((link) => {
    if (link.startsWith("http")) {
      return true
    } else {
      return false
    }
  })
  return arrayLinks
}
// eslint-disable-next-line no-lone-blocks
{
  module.exports = { extractLinks }
}
