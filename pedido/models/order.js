'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    UserId: {
      type : DataTypes.INTEGER,
      references: 'Users',
      referencesKey: 'id'
    },
    data: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.User)
    Order.hasMany(models.OrderItem)
  };
  return Order;
};