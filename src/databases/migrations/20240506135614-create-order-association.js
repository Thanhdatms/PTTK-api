'use strict';

const { QueryInterface } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Adding 'user_id' column to 'Order' table
    await queryInterface.addColumn(
      'Order',
      'user_id',
      {
        type: Sequelize.UUID,
        references: {
          model: 'User',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
      }
    );

    // Creating 'Orderdetail' table
    await queryInterface.createTable('Orderdetail', {
      order_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        references: {
          model: 'Order',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
      product_detail_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        unique: false, // Consider whether this should be unique or not
        references: {
          model: 'Product',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    // Dropping 'Orderdetail' table
    await queryInterface.dropTable('Orderdetail');

    // Removing 'user_id' column from 'Order' table
    await queryInterface.removeColumn('Order', 'user_id');
  }
};
