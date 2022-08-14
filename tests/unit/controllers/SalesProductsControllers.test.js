const { expect } = require('chai');
const { describe, it } = require('mocha');
const SalesProductsServices = require('../../../services/SalesProductsServices');
const SalesProductsControllers = require('../../../controllers/SalesProductsController');
const sinon = require('sinon');


describe('Testando a busca de produtos no BD', () => {
  describe('Verifica o retorno da função allSalesProducts', () => {
    const request = {};
    const response = {};

    const obj = [{
      "id": 3,
      "itemsSold": [
        {
          "productId": 1,
          "quantity": 1
        },
        {
          "productId": 2,
          "quantity": 5
        }
      ]
    }]

    before(() => {
      response.status = sinon.stub().returns(response);
      request.params = sinon.stub().returns({ id: 1 })
      response.json = sinon.stub().returns();
      sinon.stub(SalesProductsServices, 'allSalesProducts').resolves([obj]);
    });

    after(() => {
      SalesProductsServices.allSalesProducts.restore();
    });

    it('Verifica se o objeto res da allSalesProducts retorna status ok', async () => {
      await SalesProductsControllers.allSalesProducts(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('verifica se o array contém dados no array', async () => {
      await SalesProductsControllers.allSalesProducts(request, response);
      expect(response.json.calledWith([obj])).to.be.equal(true);
    });

  });


  describe('Verifica o retorno da função allSalesProducts quando não existe valor', () => {

    const request = {};
    const response = {};

    
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(SalesProductsServices, 'allSalesProducts').resolves(undefined);
    });

    after(() => {
      SalesProductsServices.allSalesProducts.restore()
    });

    const message = { message: 'Sale not found' }

    it('Verifica se o objeto res da getproduct retorna status 404', async () => {
      await SalesProductsControllers.allSalesProducts(request, response);
      expect(response.status.calledWith(404)).to.be.equal(true);
    })

    it('verifica se o json está sendo chamado com dados', async () => {
      await SalesProductsControllers.allSalesProducts(request, response);
      expect(response.json.calledWith(message)).to.be.equal(true);
    });
  })




  describe('Verifica o retorno da função getSalesProduct', () => {
    const request = {};
    const response = {};

    const obj = {
      "id": 3,
      "itemsSold": [
        {
          "productId": 1,
          "quantity": 1
        },
        {
          "productId": 2,
          "quantity": 5
        }
      ]
    }

    before(() => {
      response.status = sinon.stub().returns(response);
      request.params = { id: 5 };
      response.json = sinon.stub().returns();
      sinon.stub(SalesProductsServices, 'getSalesProduct').resolves([obj]);
    });

    after(() => {
      SalesProductsServices.getSalesProduct.restore()
    });

    it('Verifica se o objeto res da getSalesProduct retorna status 200', async () => {
      await SalesProductsControllers.getSalesProduct(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('verifica se o json está sendo chamdo com dados', async () => {
      await SalesProductsControllers.getSalesProduct(request, response);
      expect(response.json.calledWith([obj])).to.be.equal(true);
    });

  });


})