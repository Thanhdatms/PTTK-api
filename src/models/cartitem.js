'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CartItem.belongsTo(models.Cart, {
        foreignKey: 'cart_id',
      });

      CartItem.belongsTo(models.Product, {
        foreignKey: 'product_id'
      })
    }
  }
  CartItem.init({
    cart_id: {
      primaryKey: true,
      type: DataTypes.UUID,
      references: {
        model: 'Cart',
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
    modelName: 'CartItem',
  });
  return CartItem;
};