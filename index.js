const fs = require('node:fs')
const path = require('node:path')
const { extractLinks } = require('./extractlinks.js')
const { validate } = require('./validate.js')
const paths = process.argv[2]

const mdlinks = (paths, options) => {
  const newPromise = new Promise((resolve, reject) => {
    if (path.isAbsolute(paths) === false) {
      paths = path.resolve(paths)

      if (fs.existsSync(paths)) {
        const statusPath = fs.statSync(paths)
        const extFile = path.extname(paths)

        if (statusPath.isDirectory() || extFile !== '.md') {
          reject('Please enter a MD file')
        } else {
        // eslint-disable-next-line n/handle-callback-err
          fs.readFile(paths, 'utf-8', (err, data) => {
            if (options.validate) {
              resolve(validate(extractLinks(data)))
            } else {
              resolve(extractLinks(data))
            }
          })
        }
      } else {
        reject('The File doesn´t exists!')
      }
    }
  })

  return newPromise
}

mdlinks(paths, { validate: true }).then((result) => {
  console.log(result)
}).catch((err) => {
  console.error(err)
})
