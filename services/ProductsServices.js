const ProductsModels = require('../models/ProductsModels');
const Validate = require('../middlewares/ProductsError');

const ProductsServices = {

  allProducts: async () => {
    const result = await ProductsModels.allProducts();
    return result;
  },

  getProduct: async (id) => {
   console.log('oi');
    const result = await ProductsModels.getProduct(id); 
    if (!result) return null;
    return result;
  },

  addProduct: async (name) => {
    const check = Validate.validateProducts(name);
    const result = await ProductsModels.addProduct(check);
    return result;
  },
};

module.exports = ProductsServices;