const express = require('express')
const productController = require('../controller/product.js') 
const router = express.Router()

router.get('/add-product', productController.getAddProductPage)

router.post('/add-product', productController.addProduct)

module.exports = router