const connection = require('./connection');

const SalesModels = {
  InsertSales: async () => {
    const sql = 'INSERT INTO StoreManager.sales (date) VALUES (NOW());';
    const [result] = await connection.execute(sql);
    return result.insertId;
  },
};

module.exports = SalesModels;