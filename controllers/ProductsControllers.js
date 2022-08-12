const ProductsServices = require('../services/ProductsServices');

const ProductsControllers = {
  allProducts: async (__req, res) => {
      const result = await ProductsServices.allProducts();
      if (!result) return res.status(404).json({ message: 'Product not found' });
      return res.status(200).json(result);
  },

  getProduct: async (req, res) => {
    const { id } = req.params;
      const result = await ProductsServices.getProduct(id);
      if (!result) return res.status(404).json({ message: 'Product not found' });
      return res.status(200).json(result);
  },
};

module.exports = ProductsControllers;
