const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'data', 'carts.json');

const readCartFromFile = () => {
  try {
    const fileContent = fs.readFileSync(dataFilePath);
    return JSON.parse(fileContent);
  } catch (error) {
    return {
        cartId : 1,
        products : []
    };
  }
};

const writeCartToFile = (cart) => {
  const data = JSON.stringify(cart, null, 2);
  fs.writeFileSync(dataFilePath, data);
};

module.exports = {
  getCart: () => {
    return readCartFromFile();
  },

  addProductInCart : (product) => {
    const cart = readCartFromFile()
    const newProduct = {
        productId : product.productId
    }
    cart.products.push(newProduct);
    writeCartToFile(cart);
  },
};

