const ProductsModels = require('../models/ProductsModels');
// const Validate = require('../middlewares/ProductsError');

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