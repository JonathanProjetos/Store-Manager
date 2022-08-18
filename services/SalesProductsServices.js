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

    await Promise.all(check.map(async (v) => {
      const checkId = await ProductsServices.getProduct(v.productId);
      if (!checkId) {
        const err = new Error('404|Product not found');
        throw err;
      }
      return true;
    }));
    const dados = await SalesProductsModels.addSalesProducts(check);
    return dados;
  },

  deleteSalesProduct: async (id) => {
    const SalesProductsGet = await SalesProductsModels.getSalesProduct(id);
    if (SalesProductsGet.length === 0) {
      const err = new Error('404|Sale not found');
      throw err;
    }

    const dados = await SalesProductsModels.deleteSalesProduct(id);
    return dados;
  },

  editSalesProducts: async (array, id) => {
    const check = Validate.ValidateSales(array);
    
    const SalesProductsGet = await SalesProductsModels.getSalesProduct(id);
    if (SalesProductsGet.length === 0) {
      const err = new Error('404|Sale not found');
      throw err;
    }

    await Promise.all(check.map(async (e) => {
      const test = await ProductsServices.getProduct(e.productId);
      if (!test) {
        const err = new Error('404|Product not found');
        throw err;
      }
      return true;
    }));
    
    const dados = await SalesProductsModels.editSalesProduct(check, id);
    return dados;
  },

};

module.exports = SalesProductsServices;