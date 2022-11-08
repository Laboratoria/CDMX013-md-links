
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
const oneLink = 'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback'
axios.get(oneLink)
    .then(response => {
        const linkValidate = {
            href: oneLink,
            statusCode: response.status,
            status: response.statusText,
        }
        console.log(linkValidate)
        //obtenemos datos de respuesta de servidor
    })
    .catch(error => {
        console.log("invalid")
    }

        //respuesta de error del servidor
    )