const express = require('express');
const ProductsControllers = require('../controllers/ProductsControllers');
// const validate = require('../middlewares/ProductsError');

const ProductsRoute = express.Router();

ProductsRoute.get('/', async (req, res) => {
  await ProductsControllers.allProducts(req, res);
});

ProductsRoute.post('/', async (req, res) => { 
  await ProductsControllers.addProduct(req, res);
});

ProductsRoute.get('/:id', async (req, res) => { 
  await ProductsControllers.getProduct(req, res);
});

module.exports = ProductsRoute;