"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tb_cliente", {
      id_cliente: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      id_endereco: {
        type: DataTypes.INTEGER,
        references: {
          model: "tb_endereco",
          key: "id_endereco"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING(60)
      },
      telefone: {
        allowNull: false,
        type: DataTypes.STRING(20)
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(60)
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
    return queryInterface.dropTable("tb_cliente");
  }
};
