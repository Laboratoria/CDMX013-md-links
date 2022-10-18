const { marked } = require("marked");
const cheerio = require("cheerio");
const statusLink = require("./statusLink.js");

module.exports = (line, dir, options) => {
  const html = marked.parseInline(line);
  const $ = cheerio.load(html);
  const newHTML = $.html();
  let linkInfo;

  /*$.prototype.logHtml = function () {
    if (this.html() !== null)
      linkInfo = { text: this.html(), href: $("a").prop("href"), file: dir };
  };
  $("a").logHtml();*/

  if (options.validate !== "--validate") {
    $.prototype.logHtml = function () {
      if (this.html() !== null)
        linkInfo = { text: this.html(), href: $("a").prop("href"), file: dir };
    };
    $("a").logHtml();
  } else {
    $.prototype.logHtml = function () {
      if (this.html() !== null)
        linkInfo = {
          text: this.html(),
          href: $("a").prop("href"),
          file: dir,
          status: statusLink($("a").prop("href")),
          ok: "ok or fail",
        };
    };
    $("a").logHtml();
  }
  return linkInfo;
};
