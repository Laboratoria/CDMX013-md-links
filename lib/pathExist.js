const path = require("path");
const fs = require("fs");
module.exports = (dir) => {
  if (path.isAbsolute) dir = path.resolve(dir);

  if (fs.existsSync(dir)) {
    return true;
  }
  return false;
};
