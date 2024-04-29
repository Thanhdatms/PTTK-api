'use strict';

const UserService = require('../services/user.service');
const { OK } = require('../helpers/index');

class UserController {
    async get_list_users(req, res, next) {
        try {
            // Assuming you want to fetch users using UserService
            const users = await UserService.getUsers();
            // Sending a response with the fetched users
            res.status(200).json({
                message: 'Users retrieved successfully',
                data: users
            });
        } catch (error) {
            // If an error occurs, pass it to the error-handling middleware
            next(error);
        }
    }
}

module.exports = new UserController();
