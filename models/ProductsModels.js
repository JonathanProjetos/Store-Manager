const connection = require('./connection');

const ProductsModels = {
  allProducts: async () => {
    const sql = 'SELECT * FROM StoreManager.products;';
    const [results] = await connection.execute(sql);
   // console.log(results);
    return results;
  },

  getProduct: async (id) => {
    const sql = 'SELECT * FROM StoreManager.products WHERE id = ?;';
    const [[result]] = await connection.execute(sql, [id]);
   // console.log(result);
    return result;
  },

};

module.exports = ProductsModels;