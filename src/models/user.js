'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Cart, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  
  User.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4 // Assuming you want to use UUIDv4 as default
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING // Corrected data type to string
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
