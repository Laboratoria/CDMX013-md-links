const statsWithValidation = (links, statsFunction) => {
    let statsOfLinks = statsFunction(links);
    let brokenLinks =  links.filter(e => e.StatusOfRequest != '200');
    let result = {total: links.length, unique: statsOfLinks.unique, broken: brokenLinks.length, brokenLinksArray: brokenLinks}
    return result
}

module.exports = { statsWithValidation }