module.exports = (sequelize, DataTypes) => {
  const Servico = sequelize.define("tb_servico", {
    descricao: DataTypes.STRING(30),
    preco_servico: DataTypes.DECIMAL(5, 2),
    exclusivo: DataTypes.BOOLEAN,
    duracao: DataTypes.TIME
  });

  return Servico;
};
