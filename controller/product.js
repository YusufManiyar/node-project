const rootDir = require('../utils/path.js')
const path = require('path')

module.exports = {
    getAddProductPage : (req, res, next) => {
        res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    },

    addProduct : (req, res, next) => {
        console.log(req.body)
        res.redirect('/shop')
    },

}

