 const fs = require('fs');

const validatePath = (path) => {
    let result = '';
   
    if (fs.existsSync(path)) {
        // path exists
        result = `exists: ${path}`;
        // console.log(result);
      } else {
        // throw new Error('DOES NOT exist:', path);
        result = `DOES NOT exist: ${path}`;
        // console.log(result);
      }
      return result;
}

// validatePath('../README.md');

module.exports={
    validatePath
}
