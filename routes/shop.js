const express = require('express')
const shopController = require('../controller/shop.js')
const productController = require('../controller/product.js')
const router = express.Router()

router.get('/', shopController.getAddShopPage)
router.get('/products', productController.getProducts)
router.get('/products/:id', productController.getProductById)

module.exports = router