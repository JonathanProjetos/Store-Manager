const express = require('express');
const SalesProductsController = require('../controllers/SalesProductsController');

const SalesProducstRouter = express.Router();

SalesProducstRouter.get('/', async (req, res) => { 
  await SalesProductsController.allSalesProducts(req, res);
});

SalesProducstRouter.post('/', async (req, res) => { 
  await SalesProductsController.addSalesProducts(req, res);
});

SalesProducstRouter.get('/:id', async (req, res) => { 
  await SalesProductsController.getSalesProduct(req, res);
});

SalesProducstRouter.delete('/:id', async (req, res) => {
  await SalesProductsController.deleteSalesProduct(req, res);
 });

SalesProducstRouter.put('/:id', async (req, res) => { 
  await SalesProductsController.editSalesProduct(req, res);
});

module.exports = SalesProducstRouter;