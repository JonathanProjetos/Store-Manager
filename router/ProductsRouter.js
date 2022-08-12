const express = require('express');
const ProductsControllers = require('../controllers/ProductsControllers');

const ProductsRoute = express.Router();

ProductsRoute.get('/', async (req, res) => {
  await ProductsControllers.allProducts(req, res);
});

ProductsRoute.get('/:id', async (req, res) => { 
  await ProductsControllers.getProduct(req, res);
});

module.exports = ProductsRoute;