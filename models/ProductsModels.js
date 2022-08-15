const connection = require('./connection');

const ProductsModels = {
  allProducts: async () => {
    const sql = 'SELECT * FROM StoreManager.products;';
    const [results] = await connection.execute(sql);
    return results;
  },

  getProduct: async (id) => {
    const sql = 'SELECT * FROM StoreManager.products WHERE id = ?;';
    const [[result]] = await connection.execute(sql, [id]);
    return result;
  },

  addProduct: async ({ name }) => {
    const sql = 'INSERT INTO StoreManager.products (name) VALUES(?);';
    const [result] = await connection.execute(sql, [name]);
    return result;
  },

  editProduct: async ({ name }, id) => {
    console.log(name, typeof (id));
    const sql = 'UPDATE StoreManager.products SET name= ? WHERE id=?;';
    await connection.execute(sql, [name, id]);
    return ({ id, name });
  },

};

module.exports = ProductsModels;