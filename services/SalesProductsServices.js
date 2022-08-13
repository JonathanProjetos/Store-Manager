const SalesProductsModels = require('../models/SalesProductsModels');

const SalesProductsServices = {

  addSalesProducts: async (array) => {
    const salesproducts = await SalesProductsModels.addSalesProducts(array);
    return salesproducts;
  },
};

module.exports = SalesProductsServices;