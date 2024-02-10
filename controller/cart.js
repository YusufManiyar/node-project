const rootDir = require('../utils/path.js')
const Cart = require('../model/carts');
const path = require('path')
const cartsModel = require('../model/carts.js')
const productsModel = require('../model/products.js')

module.exports = {
    getCartPage : (req, res, next) => {
        res.sendFile(path.join(rootDir, 'view', 'cart.html'))
    },

    getProductsInCart : (req, res, next) => {
        req.user
          .getCart()
          .then(cart => {
            return cart
              .getProducts()
              .then(products => {
                res.json(products)
                // res.redirect('/cart');
              })
              .catch(err => console.log(err));
          })
          .catch(err => console.log(err));
      },

    addProduct:  (req, res, next) => {
            const prodId = req.query.productId;
            let fetchedCart;
            let newQuantity = 1;
            req.user
              .getCart()
              .then(cart => {
                fetchedCart = cart;
                return cart.getProducts({ where: { id: prodId } });
              })
              .then(products => {
                let product;
                if (products.length > 0) {
                  product = products[0];
                }
          
                if (product) {
                  const oldQuantity = product.cartItem.quantity;
                  newQuantity = oldQuantity + 1;
                  return product;
                }
                return productsModel.findByPk(prodId);
              })
              .then(product => {
                return fetchedCart.addProduct(product, {
                  through: { quantity: newQuantity }
                });
              })
              .then(() => {
                res.send('success');
              })
              .catch(err => console.log(err));
          },

postCartDeleteProduct: (req, res, next) => {
    const prodId = req.body.productId;
    req.user
      .getCart()
      .then(cart => {
        return cart.getProducts({ where: { id: prodId } });
      })
      .then(products => {
        const product = products[0];
        return product.cartItem.destroy();
      })
      .then(result => {
        res.redirect('/cart');
      })
      .catch(err => console.log(err));
  },
  
}

// const Product = require('../model/products');
// const Cart = require('../model/carts');


// module.exports ={
//     getProducts: (req, res, next) => {
//         Product.findAll()
//           .then(products => {
//             res.render('shop/product-list', {
//               prods: products,
//               pageTitle: 'All Products',
//               path: '/products'
//             });
//           })
//           .catch(err => {
//             console.log(err);
//           });
//       },
      
//       getProduct: (req, res, next) => {
//         const prodId = req.params.productId;
//         // Product.findAll({ where: { id: prodId } })
//         //   .then(products => {
//         //     res.render('shop/product-detail', {
//         //       product: products[0],
//         //       pageTitle: products[0].title,
//         //       path: '/products'
//         //     });
//         //   })
//         //   .catch(err => console.log(err));
//         Product.findById(prodId)
//           .then(product => {
//             res.render('shop/product-detail', {
//               product: product,
//               pageTitle: product.title,
//               path: '/products'
//             });
//           })
//           .catch(err => console.log(err));
//       },
      
//       getIndex: (req, res, next) => {
//         Product.findAll()
//           .then(products => {
//             res.render('shop/index', {
//               prods: products,
//               pageTitle: 'Shop',
//               path: '/'
//             });
//           })
//           .catch(err => {
//             console.log(err);
//           });
//       },
      
//       getCart: (req, res, next) => {
//         req.user
//           .getCart()
//           .then(cart => {
//             return cart
//               .getProducts()
//               .then(products => {
//                 res.render('shop/cart', {
//                   path: '/cart',
//                   pageTitle: 'Your Cart',
//                   products: products
//                 });
//               })
//               .catch(err => console.log(err));
//           })
//           .catch(err => console.log(err));
//       },
      
//       postCart: (req, res, next) => {
//         const prodId = req.body.productId;
//         let fetchedCart;
//         let newQuantity = 1;
//         req.user
//           .getCart()
//           .then(cart => {
//             fetchedCart = cart;
//             return cart.getProducts({ where: { id: prodId } });
//           })
//           .then(products => {
//             let product;
//             if (products.length > 0) {
//               product = products[0];
//             }
      
//             if (product) {
//               const oldQuantity = product.cartItem.quantity;
//               newQuantity = oldQuantity + 1;
//               return product;
//             }
//             return Product.findById(prodId);
//           })
//           .then(product => {
//             return fetchedCart.addProduct(product, {
//               through: { quantity: newQuantity }
//             });
//           })
//           .then(() => {
//             res.redirect('/cart');
//           })
//           .catch(err => console.log(err));
//       },
      
//       postCartDeleteProduct: (req, res, next) => {
//         const prodId = req.body.productId;
//         req.user
//           .getCart()
//           .then(cart => {
//             return cart.getProducts({ where: { id: prodId } });
//           })
//           .then(products => {
//             const product = products[0];
//             return product.cartItem.destroy();
//           })
//           .then(result => {
//             res.redirect('/cart');
//           })
//           .catch(err => console.log(err));
//       },      
//       getOrders: (req, res, next) => {
//         res.render('shop/orders', {
//           path: '/orders',
//           pageTitle: 'Your Orders'
//         });
//       },
      
//       getCheckout: (req, res, next) => {
//         res.render('shop/checkout', {
//           path: '/checkout',
//           pageTitle: 'Checkout'
//         });
//       },
// }
