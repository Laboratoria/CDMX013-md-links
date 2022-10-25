const { marked } = require("marked");
const cheerio = require("cheerio");
const statusLink = require("./statusLink.js");

module.exports = (line, dir, options) => {
  const html = marked.parseInline(line);
  const $ = cheerio.load(html);
  const regex = /^http/;

  if (options.validate !== "--validate") {
    $.prototype.logHtml = function () {
      if (this.html() !== null && regex.test($("a").prop("href")))
        return { text: this.html(), href: $("a").prop("href"), file: dir };
    };
  } else {
    $.prototype.logHtml = function () {
      if (this.html() !== null && regex.test($("a").prop("href"))) {
        return {
          text: this.html(),
          href: $("a").prop("href"),
          file: dir,
          status: statusLink($("a").prop("href"))
            .then((result) => {
              return result.status;
            })
            .catch((error) => {
              if (error.response) return error.response.status;
              if (error.request) return "error request";
              if (error) return "error";
            }),
          ok: "ok or fail",
        };
      }
    };
  }

  return $("a").logHtml();
};
