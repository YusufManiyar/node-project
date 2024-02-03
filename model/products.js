const db = require('../utils/database.js')

module.exports = {
  getAllProducts: () => {
    return db.execute('SELECT * FROM Product')
  },

  getProductById : (id) => {
    return db.execute('SELECT * FROM Product WHERE _id=?', [id])
  },

  addProduct: (product) => {
    try {
      return db.execute('INSERT INTO Product (title) VALUES (?)', [product.title])
    }
    catch(error) {
      console.log(error)
    }
  },

  deleteProductById: (id) => {
    try {
      return db.execute('DELETE FROM Product WHERE _id=?', [id])
    }
    catch(error) {
      console.log(error)
    }
  },
};

