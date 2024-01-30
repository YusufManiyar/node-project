const rootDir = require('../utils/path.js')
const path = require('path')
const productsModel = require('../model/products.js')

module.exports = {
    getAddProductPage : (req, res, next) => {
        res.sendFile(path.join(rootDir, 'view', 'add-product.html'))
    },

    addProduct : (req, res, next) => {
        const { title, description, price } = req.body;
        const newProduct = { title, description, price };
        productsModel.addProduct(newProduct);
        res.redirect('/')
    },

    getProducts : (req, res, next) => {
        const products = productsModel.getAllProducts()
        res.send(products)
    }
}