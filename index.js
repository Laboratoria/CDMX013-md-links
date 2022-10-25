const foundFile = require("./lib/foundFile.js");
let dir = process.argv[2];
const options = { validate: process.argv[3], stats: process.argv[4] };

function mdLinks() {
  if (options.validate === "--validate") {
    const links = foundFile(dir, options);
    const promises = links.map((p) =>
      p.status.then((statusValue) => {
        let ok;
        if (statusValue >= 200 && statusValue < 300) {
          ok = "ok";
        } else {
          ok = "fail";
        }
        return {
          ...p,
          status: statusValue,
          ok: ok,
        };
      })
    );
    Promise.all(promises)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  } else if (options.validate === "--stats") {
    console.log(options.validate);
    return options;
  } else {
    const links = foundFile(dir, options);
    console.log(links);
    return links;
  }
}

mdLinks();
