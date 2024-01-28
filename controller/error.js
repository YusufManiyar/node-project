const rootDir = require('../utils/path.js')
const path = require('path')

module.exports = {
    pageNotFound : (req, res, next) => {
        res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
    },
}

