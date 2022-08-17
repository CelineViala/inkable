const express = require('express');
const authController=require('../controllers/authController');
const authenticateJWTConsumer = require('../middlewares/authenticateJWTConsumer');
const authenticateJWTPro = require('../middlewares/authenticateJWTPro');
const router = express.Router();
router.post('/login', authController.login);
router.get('/testConsumer', authenticateJWTConsumer,authController.testConsumer);
router.get('/testPro', authenticateJWTPro,authController.testPro);


module.exports=router;