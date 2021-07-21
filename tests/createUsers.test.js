const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { expect } = chai;

const app = require('../index');

const bodyReq = { nome: 'zezinho', telNumero: 123489, celNumero: 1567891, endereço: "30150-100", especialidades: "Javascript,React" }


describe('Teste da rota /usuario/create', () => {

  describe('testa se o retorno da rota', () => {

    it('retorna um objeto', async () => {
      let res = await chai.request(app).post('/usuarios/create').send(bodyReq)
      expect(res.body).to.be.an("object");
    });


    it('retorna um status 201', async () => {
      let res = await chai.request(app).post('/usuarios/create').send(bodyReq)
      expect(res.status).to.be.equals(201);
    });
  })


})