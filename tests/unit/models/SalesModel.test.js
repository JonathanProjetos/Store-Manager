const { expect } = require('chai');
const { describe, it } = require('mocha');
const connection = require('../../../models/connection');
const SalesModel = require('../../../models/SalesModels');
const sinon = require('sinon');


describe('Verifica o tipo de dado retornado', () => {

  const resultado = 1;
  before(() => {
    sinon.stub(connection, 'execute').resolves(resultado)
  });

  after(() => {
    connection.execute.restore()
  });

  it('verifica se o retorno da função e um objeto', async () => {

    sinon.stub(SalesModel, 'InsertSales').resolves(resultado);

    const result = await SalesModel.InsertSales();

    expect(result).to.be.a('number');
  })
})


