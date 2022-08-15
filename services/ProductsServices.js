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
    const check = Validate.validateProducts(name);
    const result = await ProductsModels.addProduct(check);
    return result;
  },

  editProduct: async (name, id) => {
    const check = Validate.validateProducts(name);
    const checkID = await ProductsModels.getProduct(id); 
    if (!checkID) throw new Error('404|Product not found');
    const result = await ProductsModels.editProduct(check, id);
    return result;
  },

  deleteProduct: async (id) => {
    const checkID = await ProductsModels.getProduct(id);
    if (!checkID) throw new Error('404|Product not found');
    const result = await ProductsModels.deleteProduct(id);
    return result;
  },
};

module.exports = ProductsServices;