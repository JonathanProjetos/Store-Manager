const ProductsServices = require('../services/ProductsServices');

const MESSAGE_ERROR = 'Product not found';

const ProductsControllers = {
  allProducts: async (__req, res) => {
      const result = await ProductsServices.allProducts();
    if (!result) return res.status(404).json({ message: MESSAGE_ERROR });
      return res.status(200).json(result);
  },

  addProduct: async (req, res) => {
    const name = req.body;
    const result = await ProductsServices.addProduct(name);
    return res.status(201).json({ id: result.insertId, ...req.body });
  },
  
  getProduct: async (req, res) => {
    const { id } = req.params;
    const result = await ProductsServices.getProduct(id);
    if (!result) return res.status(404).json({ message: MESSAGE_ERROR });
    return res.status(200).json(result);
  },

  editProduct: async (req, res) => {
    const { id } = req.params;
    const name = req.body;
    console.log('edit', name, id);
    const result = await ProductsServices.editProduct(name, id);
    if (!result) return res.status(404).json({ message: MESSAGE_ERROR });
    return res.status(200).json(result);
  },
  
  deleteProduct: async (req, res) => {
    const { id } = req.params;
    const result = await ProductsServices.deleteProduct(id);
    if (!result) return res.status(404).json({ message: MESSAGE_ERROR });
    return res.status(204).end();
  },

  queryProduct: async (req, res) => {
    const { q } = req.query;
    const result = await ProductsServices.queryProduct(q);
    console.log(result);
    return res.status(200).json(result);
  },
};

module.exports = ProductsControllers;
