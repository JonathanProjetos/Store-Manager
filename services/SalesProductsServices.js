const SalesProductsModels = require('../models/SalesProductsModels');
const Validate = require('../middlewares/ProductsError');
const ProductsServices = require('./ProductsServices');

const SalesProductsServices = {
  
  allSalesProducts: async () => {
    const result = await SalesProductsModels.allSalesProducts();
    const serialize = result.map((d) => {
      const dadosAlterados = {
        saleId: d.sale_id,
        date: d.date,
        productId: d.product_id,
        quantity: d.quantity,
      };
      return dadosAlterados;
    });
    return serialize;
  },

  getSalesProduct: async (id) => {
    const result = await SalesProductsModels.getSalesProduct(id);
    const serialize = result.map((d) => {
      const dadosAlterados = {
        date: d.date,
        productId: d.product_id,
        quantity: d.quantity,
      };
      return dadosAlterados;
    });
    return serialize;
  },

  addSalesProducts: async (array) => {
    const check = Validate.ValidateSales(array);
    const dados = await SalesProductsModels.addSalesProducts(check);
    console.log('aqui', dados.itemsSold);

    const validate = dados.itemsSold.map(async (v) => {
      const test = await ProductsServices.getProduct(v.productId);
      if (!test) {
        const err = new Error('404|Product not found');
        throw err;
      }
      return validate;
    });

    return dados;
  },

};

module.exports = SalesProductsServices;