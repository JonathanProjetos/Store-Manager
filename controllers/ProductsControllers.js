const ProductsServices = require('../services/ProductsServices');

const ProductsControllers = {
  allProducts: async (__req, res) => {
    try {
      const result = await ProductsServices.allProducts();
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Servidor off' });
    }
  },

  getProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await ProductsServices.getProduct(id);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Servidor off' });
    }
  },
};

module.exports = ProductsControllers;
