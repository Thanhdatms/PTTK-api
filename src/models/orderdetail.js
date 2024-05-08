'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderDetail.belongsTo(models.Order, {
        foreignKey: 'order_id'
      })
      OrderDetail.belongsTo(models.Product, {
        foreignKey: 'product_id'
      })
    }
  }
  OrderDetail.init({
    order_id: {
      primaryKey: true,
      type: DataTypes.UUID,
      references: {
        model: 'Order',
        key: 'id',
      }
    },
    product_id: {
      primaryKey: true,
      type: DataTypes.UUID,
      references: {
        model: 'Product',
        key: 'id',
      }
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    }
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  return OrderDetail;
};