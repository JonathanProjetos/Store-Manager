const { expect } = require('chai');
const { describe, it } = require('mocha');
const ProductsModels = require('../../../models/ProductsModels');
const ProductsServices = require('../../../services/ProductsServices')
const sinon = require('sinon');


describe('Testando a busca de produtos no BD', () => {
  describe('Verifica o retorno da função allProducts', () => {

    before(() => {
      const returnArray = [{ id: 1, name: "jhon" }];
      sinon.stub(ProductsModels, 'allProducts').resolves(returnArray)
    });

    after(() => {
      ProductsModels.allProducts.restore()
    });

    it('Verifica se o tipo de dado retornado e um object', async () => {
      const result = await ProductsServices.allProducts();
      expect(result[0]).to.be.an('object');
    });

    it('verifica se o array contém dados ', async () => {
      const result = await ProductsServices.allProducts();
      expect(result).to.be.not.empty;
    });

  });

  describe('Verifica o retorno da função getProducts', () => {

    before(() => {
      const returnArray = [{ id: 1, name: "jhon" }];
      sinon.stub(ProductsModels, 'getProduct').resolves(returnArray) 
    });

    after(() => {
      ProductsModels.getProduct.restore()
    });

    it('Verifica se o tipo de dado retornado e um object', async () => {
      const result = await ProductsServices.getProduct();
      expect(result[0]).to.be.an('object');
    });

    it('verifica se o array contém dados no array', async () => {
      const result = await ProductsServices.getProduct();
      expect(result).to.be.not.empty;
    });

    it('verifica se a função retorna chaves id e name', async () => {
      const result = await ProductsServices.getProduct();
      expect(result[0]).to.include.all.keys('id', 'name')
    })

  });

})