const rootDir = require('../utils/path.js')
const path = require('path')
const productsModel = require('../model/products.js')
module.exports = {
    getAddProductPage : (req, res, next) => {
        res.sendFile(path.join(rootDir, 'view', 'add-product.html'))
    },

    addProduct : async (req, res, next) => {
        try {
            const { title } = req.body;
            await productsModel.addProduct({ title });
            res.redirect('/')
        }
        catch(error) {
            console.log(error)
        }
       
    },

    getProducts : async (req, res, next) => {
        try {
            const [products] = await productsModel.getAllProducts()
            res.send(products)
        }catch(error) {
            console.log(error)
        }
    },

    getProductById : async (req, res, next) => {
        const id = req.url.split('/')[2]
        const [product] = await productsModel.getProductById(id)
        res.json(product)
    },

    deleteProductById : async (req, res, next) => {
        const id = req.url.split('/')[2];
        await productsModel.deleteProductById(id)
        res.status(200).send("success")
    },

}