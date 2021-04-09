const express = require('express');
const userController = require('../controller/user');
const router = express.Router();

router.get('/',userController.getLogin);
router.get('/index',userController.getIndex);

module.exports = router;