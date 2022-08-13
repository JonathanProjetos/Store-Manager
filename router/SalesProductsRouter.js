const express = require('express');
const SalesProductsController = require('../controllers/SalesProductsController');

const SalesProducstRouter = express.Router();

SalesProducstRouter.post('/', async (req, res) => { 
  await SalesProductsController.addSalesProducts(req, res);
});

module.exports = SalesProducstRouter;