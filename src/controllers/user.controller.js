'use strict';

const { OK, CREATED } = require('../core/success.response');
const UserService = require('../services/user.service');


class UserController {
    get_list_users = async (req, res, next) => {
        new OK({
            message: 'Users retrieved successfully',
            metadata: await UserService.get_all()
        }).send(res);
    }
}

module.exports = new UserController();