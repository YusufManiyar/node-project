const express = require('express')
const cartController = require('../controller/cart.js') 
const router = express.Router()


router.get('/',cartController.getCartPage)
router.get('/products',cartController.getProductsInCart)

router.post('/add',cartController.addProduct)

module.exports = router