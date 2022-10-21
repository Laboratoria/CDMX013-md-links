const { marked } = require("marked");
const cheerio = require("cheerio");
const statusLink = require("./statusLink.js");

module.exports = (line, dir, options) => {
  const html = marked.parseInline(line);
  const $ = cheerio.load(html);

  if (options.validate !== "--validate") {
    $.prototype.logHtml = function () {
      if (this.html() !== null)
        return { text: this.html(), href: $("a").prop("href"), file: dir };
    };
  } else {
    $.prototype.logHtml = function () {
      if (this.html() !== null) {
        return {
          text: this.html(),
          href: $("a").prop("href"),
          file: dir,
          status: statusLink($("a").prop("href"))
            .then((result) => {
              return result.status;
            })
            .catch((error) => console.error(" Outside error:", error)),
          ok: "ok or fail",
        };
      }
    };
  }
  return $("a").logHtml();
};
