"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tb_endereco", {
      id_endereco: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      rua: {
        allowNull: false,
        type: DataTypes.STRING(80)
      },
      numero: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      bairro: {
        allowNull: false,
        type: DataTypes.STRING(30)
      },
      cidade: {
        allowNull: false,
        type: DataTypes.STRING(30)
      },
      estado: {
        allowNull: false,
        type: DataTypes.CHAR(2)
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tb_endereco");
  }
};
