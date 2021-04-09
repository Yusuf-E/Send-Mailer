const express = require('express');
const userController = require('../controller/user');
const router = express.Router();

router.get('/',userController.getLogin);
router.post('/',userController.postLogin);
router.get('/index',userController.getIndex);
router.post('/index',userController.postMail);

module.exports = router;