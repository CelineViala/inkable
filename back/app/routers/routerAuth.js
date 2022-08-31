const express = require('express');
const { errorHandler } = require('../helpers/errorHandler');
const authController = require('../controllers/authController');

const router = express.Router();

// à compléter
router.post('/login', authController.login);

// traitement formulaire inscription
router.post('/signupPro', authController.signupPro);

router.use(errorHandler);

module.exports = router;
