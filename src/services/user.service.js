'use strict';
const db = require('../models');

class UserService {
    static getUsers = async () => {
        try {
            // Retrieve only username and email fields for all users from the database
            const users = await db.User.findAll({
                attributes: ['username', 'email']
            });
            return users;
        } catch (error) {
            // Handle any errors
            throw new Error('Failed to retrieve users from the database');
        }
    }
}

module.exports = UserService;
