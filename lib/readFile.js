var fs = require("fs");

module.exports = (dir) => {
  fs.readFile(dir, "utf8", function (err, contents) {
    if (err) {
      console.log(err);
    }
    console.log(contents);
  });
};
