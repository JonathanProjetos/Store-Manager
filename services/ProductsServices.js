const ProductsModels = require('../models/ProductsModels');

const ProductsServices = {
  allProducts: async () => {
    const result = await ProductsModels.allProducts();
    return result;
  },

  getProduct: async (id) => {
    const result = await ProductsModels.getProduct(id);
    return result;
  },
};

module.exports = ProductsServices;