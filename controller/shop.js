const rootDir = require('../utils/path.js')
const path = require('path')
const productsModel = require('../model/products.js');

module.exports = {
    getAddShopPage: (req, res, next) => {
        // Render the shop page with the product data
        res.sendFile(path.join(rootDir, 'view', 'shop.html'))
    },
}

