const { expect } = require('chai');
const { describe, it } = require('mocha');
const SalesProductsModels = require('../../../models/SalesProductsModels')
const SalesProductsServices = require('../../../services/SalesProductsServices')
const sinon = require('sinon');


describe('Testando a busca de produtos no BD', () => {
  describe('Verifica o retorno da função allSalesProducts', () => {

    before(() => {
      const returnArray = [{ id: 1, name: "jhon" }];
      sinon.stub(SalesProductsModels, 'allSalesProducts').resolves(returnArray)
    });

    after(() => {
      SalesProductsModels.allSalesProducts.restore()
    });

    it('Verifica se o tipo de dado retornado e um object', async () => {
      const result = await SalesProductsServices.allSalesProducts();
      expect(result[0]).to.be.an('object');
    });

    it('verifica se o array contém dados ', async () => {
      const result = await SalesProductsServices.allSalesProducts();
      expect(result).to.be.not.empty;
    });

  });

  describe('Verifica o retorno da função getSalesProduct', () => {

    before(() => {
      const returnArray = [
        {
          "date": "2021-09-09T04:54:29.000Z",
          "productId": 1,
          "quantity": 2
        },
        {
          "date": "2021-09-09T04:54:54.000Z",
          "productId": 2,
          "quantity": 2
        }
      ];
      sinon.stub(SalesProductsModels, 'getSalesProduct').resolves(returnArray)
    });

    after(() => {
      SalesProductsModels.getSalesProduct.restore()
    });

    it('Verifica se o tipo de dado retornado e um object', async () => {
      const result = await SalesProductsServices.getSalesProduct();
      expect(result[0]).to.be.an('object');
    });

    it('verifica se o array contém dados no array', async () => {
      const result = await SalesProductsServices.getSalesProduct();
      expect(result).to.be.not.empty;
    });

    it('verifica se a função retorna chaves date, productId,quantity', async () => {
      const result = await SalesProductsServices.getSalesProduct();
      expect(result[0]).to.include.all.keys('date', 'productId','quantity')
    })

  });

})