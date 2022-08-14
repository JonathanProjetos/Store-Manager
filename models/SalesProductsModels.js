const connection = require('./connection');
const SalesModels = require('./SalesModels');

const SalesProductsModels = {
  addSalesProducts: async (body) => {
    const salesId = await SalesModels.InsertSales();
    const result = await Promise.all(body.map(async (item) => {
      const { productId, quantity } = item;
      const sql = `INSERT INTO StoreManager
      .sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);`;
      await connection.execute(sql, [
        salesId,
        productId,
        quantity,
      ]);
      return salesId;
    }));
    return { id: result[0], itemsSold: body };
  },

  allSalesProducts: async () => {
    const sql = `
    SELECT 
      sp.sale_id,
      s.date,
      sp.product_id,
      sp.quantity
    FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS sp
    ON s.id = sp.sale_id;`;
    const [result] = await connection.execute(sql);
    return result;
  },
};

module.exports = SalesProductsModels;
