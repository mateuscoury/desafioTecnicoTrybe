const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../index');
const { Usuario } = require('../models/index');


describe('Testes Básicos', () => {
  describe('quando não existe nenhum usuário cadastrado', () => {
    let res
    before(async () => {
      res = await chai.request(app).get('/usuarios')
    });

    it('retorna um objeto como resposta', async () => {
      expect(res.body).to.be.an("object")
    })

    it('retorna um status ok', async () => {
      expect(res.status).to.be.equals(200)
    })
    it('retorna um objeto que nao esta vazio', async () => {
      expect(res.body).to.not.be.empty
    })
  })
})