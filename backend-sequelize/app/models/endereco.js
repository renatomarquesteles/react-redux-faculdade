module.exports = (sequelize, DataTypes) => {
  const Endereco = sequelize.define("tb_endereco", {
    rua: DataTypes.STRING(80),
    numero: DataTypes.INTEGER,
    bairro: DataTypes.STRING(30),
    cidade: DataTypes.STRING(30),
    estado: DataTypes.CHAR(2)
  });

  Endereco.associate = function(models) {
    Endereco.hasMany(models.Cliente, { as: "clientes" });
  };

  return Endereco;
};
