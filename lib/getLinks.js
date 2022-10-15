const { marked } = require("marked");
const cheerio = require("cheerio");

module.exports = (line, dir) => {
  const html = marked.parseInline(line);
  const $ = cheerio.load(html);
  const newHTML = $.html();
  let linkInfo;

  $.prototype.logHtml = function () {
    // console.log({ text: this.html(), href: $("a").prop("href"), file: dir });
    if (this.html() !== null)
      linkInfo = { text: this.html(), href: $("a").prop("href"), file: dir };
    /*console.log(this.html(), $("a").prop("href"));*/
  };
  $("a").logHtml();
  return linkInfo;
};
