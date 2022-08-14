const SalesProductsServices = require('../services/SalesProductsServices');

const SalesProductsControllers = {
  allSalesProducts: async (_req, res) => {
    const result = await SalesProductsServices.allSalesProducts();
    if (!result) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).json(result);
  },

  addSalesProducts: async (req, res) => {
    const produtos = req.body;
    const result1 = await SalesProductsServices.addSalesProducts(produtos);
    return res.status(201).json(result1);
  },
};

module.exports = SalesProductsControllers;