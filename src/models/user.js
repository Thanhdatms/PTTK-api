'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Cart, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  User.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    
    username: {
      allowNull: false,
      type: Model.UUID
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    hashPassword: {
      allowNull: false,
      type: DataTypes.STRING
    },
    refreshToken: {
      allowNull: true,
      type: DataTypes.STRING
    },
    isActive: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true,
    paranoid: true
  });
  return User;
};