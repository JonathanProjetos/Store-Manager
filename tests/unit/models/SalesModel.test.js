const { expect } = require('chai');
const { describe, it } = require('mocha');
const connection = require('../../../models/connection');
const SalesModel = require('../../../models/SalesModels');
const sinon = require('sinon');


describe('Verifica o tipo de dado retornado', () => {

  const returnObj = [{
    fieldCount: 0,
    affectedRows: 1,
    insertId: 3,
    info: '',
    serverStatus: 2,
    warningStatus: 0
  }];

  before(() => {
    sinon.stub(connection, 'execute').resolves(returnObj)
  });

  after(() => {
    connection.execute.restore()
  });

  it('verifica se o retorno da função e um objeto', async () => {
    const result = await SalesModel.InsertSales();

    expect(result).to.be.a('number');
  })
})


