const { expect } = require('chai');
const { describe, it } = require('mocha');
const SalesProductsModels = require('../../../models/SalesProductsModels');
const connection = require('../../../models/connection');
const sinon = require('sinon');


describe('Testando a busca de produtos no BD', () => {
  describe('Verifica o retorno da função allSalesProducts', () => {

    const returnArray = [{
      "saleId": 1,
      "date": "2022-08-18T17:37:55.000Z",
      "productId": 1,
      "quantity": 5
    }];
  
    before(() => {
      sinon.stub(connection, 'execute').resolves(returnArray)
    });

    after(() => {
      connection.execute.restore()
    });

    it('Verifica se o tipo de dado retornado e um object', async () => {
      const result = await SalesProductsModels.allSalesProducts();
      expect(result).to.be.an('object');
    });

    it('verifica se o array contém dados ', async () => {
      const result = await SalesProductsModels.allSalesProducts();
      expect(result).to.be.not.empty;
    });

  });

  describe('Verifica o retorno da função getSalesProduct', () => {

    before(() => {
      const returnArray = [{
        "date": "2021-09-09T04:54:29.000Z",
        "productId": 1,
        "quantity": 2
      }];
      sinon.stub(connection, 'execute').resolves(returnArray)
    });

    after(() => {
      connection.execute.restore()
    });

    it('Verifica se o tipo de dado retornado e um array', async () => {
      const result = await SalesProductsModels.getSalesProduct();
      expect(result).to.be.an('object');
    });

    it('verifica se o array contém dados', async () => {
      const result = await SalesProductsModels.getSalesProduct();
      expect(result).to.be.not.empty;
    });

    it('verifica se a função retorna chaves date, productId, quantity', async () => {
      const result = await SalesProductsModels.getSalesProduct();
      expect(result).to.include.all.keys('date', 'productId', 'quantity')
    })

  });

})