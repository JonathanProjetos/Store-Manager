const connection = require('./connection');
const SalesServices = require('./SalesModels');

const addSalesProducts = async (arrayBody) => {
  console.log(arrayBody);
  const result = await Promise.all(arrayBody.map(async ({ productId, quantity }) => {
    const insertId = await SalesServices.InsertSales();
    const sql = `INSERT INTO StoreManager
      .sales_products(sale_id,product_id,quantity) VALUES(?,?,?)`;
    await connection.execute(sql, [insertId, productId, quantity]);
    return insertId;
  }));

  return ({ id: result[0], itemsSold: arrayBody });
};

module.exports = {
  addSalesProducts,
};
