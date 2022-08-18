const SalesProductsServices = require('../services/SalesProductsServices');

const SalesProductsControllers = {
  allSalesProducts: async (_req, res) => {
    const result = await SalesProductsServices.allSalesProducts();
    if (!result) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).json(result);
  },

  getSalesProduct: async (req, res) => {
    const { id } = req.params;
    const result = await SalesProductsServices.getSalesProduct(id);
    if (result.length === 0) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).json(result);
  }, 

  addSalesProducts: async (req, res) => {
    const produtos = req.body;
    const result = await SalesProductsServices.addSalesProducts(produtos);
    return res.status(201).json(result);
  },

  deleteSalesProduct: async (req, res) => {
    const { id } = req.params;
    await SalesProductsServices.deleteSalesProduct(id);
    return res.status(204).end();
  },

  editSalesProduct: async (req, res) => {
    const produtos = req.body;
    const { id } = req.params;
    const result = await SalesProductsServices.editSalesProducts(produtos, id);
    return res.status(200).json(result); 
  },
};

module.exports = SalesProductsControllers;