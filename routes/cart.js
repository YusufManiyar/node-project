const express = require('express')
const cartController = require('../controller/cart.js') 
const router = express.Router()


router.get('/',cartController.getCartPage)
router.get('/products',cartController.getProductsInCart)

router.post('/add',cartController.addProduct)
router.post('/remove', cartController.postCartDeleteProduct);

module.exports = router