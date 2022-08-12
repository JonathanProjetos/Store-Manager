const ProductsServices = require('../services/ProductsServices');

const ProductsControllers = {
  allProducts: async (__req, res) => {
      const result = await ProductsServices.allProducts();
      if (!result) return res.status(404).json({ message: 'Product not found' });
      return res.status(200).json(result);
  },

  addProduct: async (req, res) => {
    const name = req.body;
    const result = await ProductsServices.addProduct(name);
    if (!result) return res.status(400);
    return res.status(201).json({ id: result.insertId, ...req.body });
  },
  
  getProduct: async (req, res) => {
    const { id } = req.params;
    const result = await ProductsServices.getProduct(id);
    if (!result) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(result);
  },

};

module.exports = ProductsControllers;
