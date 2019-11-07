module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define("tb_cliente", {
    nome: DataTypes.STRING(60),
    telefone: DataTypes.STRING(20),
    email: DataTypes.STRING(60)
  });

  return Cliente;
};
