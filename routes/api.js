const express = require('express')
const router = express.Router();
const userController = require('../controllers/api/userController');
const verifyToken = require('../middlewares/verifytoken');

// login and register
router.post('/register', userController.register);
router.post('/login', userController.login);

// get user
router.get('/user', verifyToken, userController.getUser);
router.post('/user', verifyToken, userController.addProfile)

module.exports = router;