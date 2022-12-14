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
    const sql = 'UPDATE StoreManager.products SET name= ? WHERE id=?;';
    await connection.execute(sql, [name, id]);
    return ({ id, name });
  },

  deleteProduct: async (id) => {
    const sql = 'DELETE FROM StoreManager.products WHERE id=?;';
    const [result] = await connection.execute(sql, [id]);
    return result;
  },

  queryProducts: async (query) => {
    const sql = 'SELECT * FROM StoreManager.products WHERE name LIKE ?';
    const [result] = await connection.execute(sql, [`%${query}%`]);
    return result;
  },

};

module.exports = ProductsModels;