const SalesProductsServices = require('../services/SalesProductsServices');

const SalesProductsControllers = {

  addSalesProducts: async (req, res) => {
    const produtos = req.body;
    const result = await SalesProductsServices.addSalesProducts(produtos);
    return res.status(201).json(result);
  },
};

module.exports = SalesProductsControllers;