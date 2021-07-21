const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../index');
const { Usuario } = require('../models/index');


describe('Teste da rota /usuario', () => {
  describe('testa se o retorno da rota', () => {
    it('retorna um objeto', async () => {
      let res = await chai.request(app).get('/usuarios')
      expect(res.body).to.be.an("object");
    });

    it('tem a propriedade usuarios', async () => {
      let res = await chai.request(app).get('/usuarios')
      expect(res.body).to.have.property("usuarios")
    });
    it('retorna um status 200', async () => {
      let res = await chai.request(app).get('/usuarios')
      expect(res.status).to.be.equals(200);
    });
  })


})