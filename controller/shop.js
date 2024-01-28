const rootDir = require('../utils/path.js')
const path = require('path')

module.exports = {
    getAddShopPage : (req, res, next) => {
        res.sendFile(path.join(rootDir, 'views', 'shop.html'))
    },

}

