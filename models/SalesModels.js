const connection = require('./connection');

const SalesModels = {
  InsertSales: async () => {
    const sql = 'INSERT INTO StoreManager.sales (date) VALUES (NOW());';
    const [result] = await connection.execute(sql);
    if (!result) return null;
    return result.insertId;
  },
};

module.exports = SalesModels;