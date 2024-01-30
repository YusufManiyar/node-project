const rootDir = require('../utils/path.js')
const path = require('path')
const cartsModel = require('../model/carts.js')

module.exports = {
    getCartPage : (req, res, next) => {
        res.sendFile(path.join(rootDir, 'view', 'cart.html'))
    },

    getProductsInCart : (req, res, next) => {
        const cart = cartsModel.getCart()
        res.send(cart.products)
    },

    addProduct:  (req, res) => {
        const { productId } = req.query;
  
        console.log(req)
    // Basic validation
    if (!productId) {
      return res.status(400).json({ error: 'Invalid request. Please provide a valid productId and quantity.' });
    }

    const newProduct = {
        productId
    };
    
    const cart = cartsModel.getCart()
    const product = cart.products.find(obj => obj.productId === productId)
    if(product) {
        return res.status(200).json(cart)
    }
    cartsModel.addProductInCart(newProduct)

    res.status(200).json(cart);
}
}

