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
      sinon.stub(ProductsServices, 'allProducts').resolves([{id:1 , name:'jhon'}]); 
    });

    after(() => {
      ProductsServices.allProducts.restore()
    });

    it('Verifica se o objeto res da allproducts retorna status ok', async () => {
      await ProductsController.allProducts(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('verifica se o array contém dados no array', async () => {
      await ProductsController.allProducts(request, response);
      expect(response.json.calledWith([{ id: 1, name: 'jhon' }])).to.be.equal(true);
    });

  });

  describe('Verifica o retorno da função getProducts', () => {
    const request = {};
    const response = {};

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(ProductsServices, 'getProduct').resolves([{ id: 1, name: 'jhon' }]);
    });

    after(() => {
      ProductsServices.allProducts.restore()
    });

    it('Verifica se o objeto res da getproducts retorna status ok', async () => {
      await ProductsController.allProducts(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('verifica se o array contém dados no array', async () => {
      await ProductsController.allProducts(request, response);
      expect(response.json.calledWith([{ id: 1, name: 'jhon' }])).to.be.equal(true);
    });

  });



})