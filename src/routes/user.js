var express = require('express');
var router = express.Router();
const db = require('../../models');
const UserController = require('../../controllers/user.controller');
const { asyncHandler } = require('../../helpers/index');

/* GET users listing. */

router.get('/', asyncHandler( UserController.get_list_users ));

module.exports = router;
