const connection = require('./connection');
const SalesModels = require('./SalesModels');

const SalesProductsModels = {

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

  getSalesProduct: async (id) => {
    const sql = `
    SELECT
      s.date,
      sp.product_id,
      sp.quantity
    FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS sp
    ON s.id = sp.product_id
    WHERE sale_id = ?; `;
    const [result] = await connection.execute(sql, [id]);
    return result;
  },

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
  
  editSalesProduct: async (body, id) => {
    const salesId = await SalesModels.InsertSales();
    const result = await Promise.all(body.map(async (item) => {
      const { productId, quantity } = item; 
      const sql = `
      UPDATE
        StoreManager.sales_products
        SET  quantity=?
        WHERE sale_id =? AND product_id= ?;`;
      await connection.execute(sql, [
        quantity,
        id,
        productId,
      ]);
      return salesId;
    }));
    return { saleId: result[0], itemsUpdated: body };
  },
};

module.exports = SalesProductsModels;
