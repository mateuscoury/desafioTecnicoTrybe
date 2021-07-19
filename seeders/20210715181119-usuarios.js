'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Usuarios", [{
      nome: 'Mateus Coury Ribeiro',
      telNumero: 123489123,
      celNumero: 123456,
      endereço: 'Rua dali',
      especialidades: 'Javascript,CSS',
    },
    {
      nome: 'Mateus Coury',
      telNumero: 123489123,
      celNumero: 123456,
      endereço: 'Rua dali',
      especialidades: 'Javascript,CSS',
    },
    {
      nome: 'Mateus',
      telNumero: 123489123,
      celNumero: 123456,
      endereço: 'Rua dali',
      especialidades: 'Javascript,CSS',
    },
    {
      nome: 'Mateus1',
      telNumero: 123489123,
      celNumero: 123456,
      endereço: 'Rua dali',
      especialidades: 'CSS,REDUX',
    },
    {
      nome: 'Mateus2',
      telNumero: 123489123,
      celNumero: 123456,
      endereço: 'Rua dali',
      especialidades: 'REACT',
    }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
