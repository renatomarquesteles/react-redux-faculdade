'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_servico', {
      id_servico: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      descricao: {
        allowNull: false,
        type: DataTypes.STRING(30),
      },
      preco_servico: {
        allowNull: false,
        type: DataTypes.DECIMAL(5,2),
      },
      exclusivo: {
        defaultValue: true,
        type: DataTypes.BOOLEAN,
      },
      duracao: {
        allowNull: false,
        type: DataTypes.TIME,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_servico');
  }
};
