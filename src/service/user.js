'use strict';

const { OK, CREATED } = require('../core/success.response');
const UserService = require('../services/user.service');

class UserController {
    static get_all = async () => {
        const users = await db.User.findAll({ raw: true });
        return users;
    }
}

module.exports = new UserController();