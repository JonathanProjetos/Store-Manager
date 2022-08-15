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

ProductsRoute.put('/:id', async (req, res) => {
  await ProductsControllers.editProduct(req, res);
});

ProductsRoute.delete('/:id', async (req, res) => {
  await ProductsControllers.deleteProduct(req, res);
});

module.exports = ProductsRoute;