const rootDir = require('../utils/path.js')
const path = require('path')
const productsModel = require('../model/products.js')
const uuid = require('uuid')
module.exports = {
    getAddProductPage : (req, res, next) => {
        res.sendFile(path.join(rootDir, 'view', 'add-product.html'))
    },

    addProduct : (req, res, next) => {
        try {
            const { title } = req.body;
            const id = uuid.v4().replace(/\D/g, '').substring(0, 6)
            const newProduct = { id, title };
            productsModel.addProduct(newProduct);
            res.redirect('/')
        }
        catch(error) {
            console.log(error)
        }
       
    },

    getProducts : (req, res, next) => {
        const products = productsModel.getAllProducts()
        console.log(products)
        res.send(products)
    },

    getProductById : (req, res, next) => {
        const id = req.url.split('/')[2]
        const product = productsModel.getProductById(id)
        console.log(product)
        res.json(product)
    },

    deleteProductById : (req, res, next) => {
        const id = req.url.split('/')[2];
        const product = productsModel.deleteProductById(id)
        console.log(product)
        res.status(200).send("success")
    },

}