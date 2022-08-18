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
      request.params = sinon.stub().returns({id: 1})
      response.json = sinon.stub().returns();
      sinon.stub(ProductsServices, 'allProducts').resolves([{id:1 , name:'jhon'}]); 
    });

    after(() => {
      ProductsServices.allProducts.restore();
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


  describe('Verifica o retorno da função allProducts quando não existe valor', () => {

    const request = {};
    const response = {};

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(ProductsServices, 'allProducts').resolves(undefined);
    });

    after(() => {
      ProductsServices.allProducts.restore()
    });

    const message = { message: 'Product not found' }

    it('Verifica se o objeto res da getproduct retorna status 404', async () => {
      await ProductsController.allProducts(request, response);
      expect(response.status.calledWith(404)).to.be.equal(true);
    })

    it('verifica se o json está sendo chamado com dados', async () => {
      await ProductsController.allProducts(request, response);
      expect(response.json.calledWith(message)).to.be.equal(true);
    });
  })




  describe('Verifica o retorno da função getProducts', () => {
    const request = {};
    const response = {};

    before(() => {
      response.status = sinon.stub().returns(response);
      request.params = { id: 1 };
      response.json = sinon.stub().returns();
      sinon.stub(ProductsServices, 'getProduct').resolves([{ id: 1, name: 'jhon' }]);
    });

    after(() => {
      ProductsServices.getProduct.restore()
    });

    it('Verifica se o objeto res da getproduct retorna status 200', async () => {
      await ProductsController.getProduct(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('verifica se o json está sendo chamdo com dados', async () => {
      await ProductsController.getProduct(request, response);
      expect(response.json.calledWith([{ id: 1, name: 'jhon' }])).to.be.equal(true);
    });

  });

  describe('Verifica o retorno da função getProducts quando não existe valor', () => {
    
    const request = {};
    const response = {};

    before(() => {
      response.status = sinon.stub().returns(response);
      request.params = { id: 0 };
      response.json = sinon.stub().returns();
      sinon.stub(ProductsServices, 'getProduct').resolves(undefined);
    });

    after(() => {
      ProductsServices.getProduct.restore()
    });

    const message = { message: 'Product not found' }
    
    it('Verifica se o objeto res da getproduct retorna status 404', async() => {
      await ProductsController.getProduct(request, response);
      expect(response.status.calledWith(404)).to.be.equal(true);
    })

    it('verifica se o json está sendo chamado com dados', async () => {
      await ProductsController.getProduct(request, response);
      expect(response.json.calledWith(message)).to.be.equal(true);
    });
  })

 

  describe('verifica o status da função addProducts status ok', () => {

    const request = {};
    const response = {};

    const produto = {
      name: 'Peixe dourado'
    };

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      request.body = { name: 'Peixe dourado' };
    })

    after(() => {
      sinon.stub(ProductsServices, 'addProduct').resolves(produto);
    })

    it('verifica se o função addProducts retorna status 201', async () => {
      await ProductsController.addProduct(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    })

  })

  describe('Verifica o status da função queryProducts status ok', () => {
    const request = {};
    const response = {};

    const produto = {
      name: 'Peixe dourado'
    };

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      request.query = { name: "Martelo de Thor" };
    })

    after(() => {
      sinon.stub(ProductsServices, 'queryProduct').resolves(produto);
    })

    it('verifica se o função queryProducts retorna status 200', async () => {
      await ProductsController.queryProduct(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    })

  });


  describe('Verifica o status da função deleteProducts status ok', () => {
    const request = {};
    const response = {};

    const produto = {
      affectedRows: 1
    }

    before(() => {
      response.status = sinon.stub().returns(response);
      response.end = sinon.stub().returns();
      request.params = { id: 2 };
      sinon.stub(ProductsServices, 'deleteProduct').resolves(produto);
    })

    after(() => {
      ProductsServices.deleteProduct.restore()
    })

    it('verifica se o função deleteProducts retorna status 204', async () => {
      const test = await ProductsController.deleteProduct(request, response);
      console.log('controller', test);
      expect(response.status.calledWith(204)).to.be.equal(true);
    })

  })

  describe('Verifica o status da função deleteProducts status ok', () => {
    const request = {};
    const response = {};

    const produto = undefined
    const message = { message: "Product not found" }

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      request.params = { id: 2 };
      sinon.stub(ProductsServices, 'deleteProduct').resolves(produto);
    })

    after(() => {
      ProductsServices.deleteProduct.restore()
    })

    it('verifica se o função deleteProducts retorna status 404', async () => {
      await ProductsController.deleteProduct(request, response);
      expect(response.status.calledWith(404)).to.be.equal(true)
      expect(response.json.calledWith(message)).to.be.equal(true);
    })

  })

  describe('Verifica o status da função editProducts status ok', () => {
    const request = {};
    const response = {};

    const produto = {
      name: 'jhon'
    }

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      request.params = { id: 1 };
      request.body = produto;
      sinon.stub(ProductsServices, 'editProduct').resolves(produto);
    })

    after(() => {
      ProductsServices.editProduct.restore()
    })

    it('verifica se o função editProducts retorna status 200', async () => {
      await ProductsController.editProduct(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    })

    it('verifica se o função editProducts retorna json com o dado atualizado', async () => {
      await ProductsController.editProduct(request, response);
      expect(response.json.calledWith(produto)).to.be.equal(true);
    })

  })

  describe('Verifica o verifica o retorno da função editProducts quando não da certo', () => {
    const request = {};
    const response = {};

    const produto = undefined
    const message = { message: "Product not found" }

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      request.params = { id: 99999 };
      request.body = produto;
      sinon.stub(ProductsServices, 'editProduct').resolves(produto);
    })

    after(() => {
      ProductsServices.editProduct.restore()
    })

    it('verifica se o função se a função retorna product not found', async () => {
     const result = await ProductsController.editProduct(request, response);
      expect(response.json.calledWith(message)).to.be.equal(true);
    })

  })


})