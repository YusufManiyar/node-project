const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'data', 'products.json');

const readProductsFromFile = () => {
  try {
    const fileContent = fs.readFileSync(dataFilePath);
    return JSON.parse(fileContent);
  } catch (error) {
    return [];
  }
};

const writeProductsToFile = (products) => {
  const data = JSON.stringify(products, null, 2);
  fs.writeFileSync(dataFilePath, data);
};

module.exports = {
  getAllProducts: () => {
    return readProductsFromFile();
  },

  getProductById : (id) => {
    const products = readProductsFromFile();
    return products.find(obj => obj.id === id)
  },

  addProduct: (product) => {
    const products = readProductsFromFile();
    products.push(product);
    writeProductsToFile(products);
  },
};

