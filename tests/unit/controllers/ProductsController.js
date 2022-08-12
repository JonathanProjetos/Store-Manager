const { expect } = require('chai');
const { describe, it } = require('mocha');
const ProductsServices = require('../../../services/ProductsServices');
const ProductsController = require('../../../controllers/ProductsControllers');
const sinon = require('sinon');


describe('Testando a busca de produtos no BD', () => {
  describe('Verifica o retorno da função allProducts', () => {
    const request = {};
    const response = {};

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(ProductsServices, 'allProducts').resolves([]); 
    });

    after(() => {
      ProductsServices.allProducts.restore()
    });

    it('Verifica se o objeto res da allproducts retorna status ok', async () => {
      await ProductsController.allProducts();
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('verifica se o array contém dados no array', async () => {
      await ProductsController.allProducts();
      expect(response.json.calledWith([])).to.be.equal(true);
    });

  });


})