'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Usuarios", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telNumero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      celNumero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      endereço: {
        type: Sequelize.STRING,
        allowNull: false
      },
      especialidades: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Usuarios")
  }
};
