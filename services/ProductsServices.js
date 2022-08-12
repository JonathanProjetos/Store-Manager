const ProductsModels = require('../models/ProductsModels');
const Validate = require('../middlewares/ProductsError');

const ProductsServices = {

  allProducts: async () => {
    const result = await ProductsModels.allProducts();
    return result;
  },

  getProduct: async (id) => {
    const result = await ProductsModels.getProduct(id);
    return result;
  },

  addProduct: async (name) => {
    console.log('1', name);
    const check = Validate(name);
    console.log('2', check);
    const result = await ProductsModels.addProduct(check);
    return result;
  },
};

module.exports = ProductsServices;