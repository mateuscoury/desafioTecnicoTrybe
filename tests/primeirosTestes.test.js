const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../index');
const { Usuario } = require('../models/index');


describe('Busca todos os usuários', () => {
  describe('quando não existe nenhum usuário cadastrado', () => {
    const findAllStub = stub(Usuario, 'findAll');

    before(() => {
      findAllStub.resolves([]);
    });

    after(() => {
      findAllStub.restore();
    });

    it('called User.findAll', async () => {
      const res = await chai.request(app)
        .post('/usuarios')

      expect(res.body).to.be.empty
    })

    it('called User.findAll', async () => {
      const res = await chai.request(app)
        .post('/usuarios')

      expect(res.status).to.be.equals(404)
    })
  })
})