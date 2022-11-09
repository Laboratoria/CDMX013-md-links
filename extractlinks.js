
const markdown = require('markdown-it');
const md = new markdown();
const axios = require("axios")
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const extractLink = (text) => {
    let textFile = md.render(text);
    // console.log(textFile)

    const nodes = new JSDOM(textFile);
    const labels = nodes.window.document.querySelectorAll("a");
    const arrayLabels = Array.apply(null, labels);
    //console.log(arrayLabels)
    const hrefAttribute = arrayLabels.map((label) => {
        return label.getAttribute("href")
    })
    const links = hrefAttribute.filter((link) => {
        if (link.startsWith("http")) {
            return true
        } else {
            return false
        }

    })
//console.log (links)
}

module.exports = {
    extractLink
}

//validar un solo link
const oneLink = 'https://nodejs.org/api/fs.html#fs_readdir_path_options_callback' //Promise all 
const requestHttp = axios.get(oneLink)
 requestHttp.then(response => {  
    if(response.status >=200 && response.status <300){
        const linkValidate = {
            href: response.config.url,
            file: response.request.path,
            status: response.status,
            message: response.statusText,
            
        }
       console.log(linkValidate)
    }
    })
    .catch(error => {  
        const linkError = {
            href: error.config.url,
            text: error.message,
            message: "Fail"
    }
    console.log(linkError)
       
})

    //traer todos los links
    // como acceder a estas propiedades en axios text: Texto que aparecía dentro del link (<a>).
    //file: Ruta del archivo donde se encontró el link.
    //error todas propiedades