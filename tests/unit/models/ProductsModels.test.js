const { expect } = require('chai');
const { describe, it } = require('mocha');
const ProductsModels = require('../../../models/ProductsModels');
const connection = require('../../../models/connection');
const sinon = require('sinon');


describe('Testando a busca de produtos no BD', () => {
  describe('Verifica o retorno da função allProducts', () => {

    before(() => {
      const returnArray = [{ id: 1, name: "jhon" }];
      sinon.stub(connection, 'execute').resolves(returnArray)
    });

    after(() => {
      connection.execute.restore()
    });

    it('Verifica se o tipo de dado retornado e um object', async () => {
      const result = await ProductsModels.allProducts();
      expect(result).to.be.an('object');
    });

    it('verifica se o array contém dados ', async () => {
      const result = await ProductsModels.allProducts();
      expect(result).to.be.not.empty;
    });

  });

  describe('Verifica o retorno da função getProducts', () => {

    before(() => {
      const returnArray = [[{ id: 1, name: "jhon" }]];
      sinon.stub(connection, 'execute').resolves(returnArray)
    });

    after(() => {
      connection.execute.restore()
    });

    it('Verifica se o tipo de dado retornado e um object', async () => {
      const result = await ProductsModels.getProduct();
      expect(result).to.be.an('object');
    });

    it('verifica se o array contém dados no array', async () => {
      const result = await ProductsModels.getProduct();
      expect(result).to.be.not.empty;
    });

    it('verifica se a função retorna chaves id e name', async () => {
      const result = await ProductsModels.getProduct();
      expect(result).to.include.all.keys('id', 'name')
    })

  });

  describe('Verifica o retorno da função addProducts',() => {
    const Produto = {
      name: "Belezinha",
    }

    it('Verifica se o id da pessoa usuaria e inserido', async () => {
      const id = await ProductsModels.addProduct(Produto);
      expect(id).to.have.a.property('name');

    })
  })
  
})