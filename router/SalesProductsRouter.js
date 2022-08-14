const express = require('express');
const SalesProductsController = require('../controllers/SalesProductsController');

const SalesProducstRouter = express.Router();

SalesProducstRouter.get('/', async (req, res) => { 
  await SalesProductsController.allSalesProducts(req, res);
});

SalesProducstRouter.post('/', async (req, res) => { 
  await SalesProductsController.addSalesProducts(req, res);
});

module.exports = SalesProducstRouter;