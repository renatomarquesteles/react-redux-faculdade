'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    OrderId: {
      type : DataTypes.INTEGER,
      references: 'Orders',
      referencesKey: 'id'
    },
    ProductId: {
      type : DataTypes.INTEGER,
      references: 'Products',
      referencesKey: 'id'
    },
    qty: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  }, {});
  OrderItem.associate = function(models) {
    // associations can be defined here
    OrderItem.belongsTo(models.Order)
    OrderItem.belongsTo(models.Product)
  };
  return OrderItem;
};