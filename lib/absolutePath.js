const path = require("path");

module.exports = (dir) => {
  if (path.isAbsolute) dir = path.resolve(dir);
  return dir;
};
