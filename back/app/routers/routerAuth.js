const express = require('express');
const { errorHandler } = require('../helpers/errorHandler');

const authController = require('../controllers/authController');
const authenticateJWTConsumer = require('../middlewares/authenticateJWTConsumer');
const authenticateJWTPro = require('../middlewares/authenticateJWTPro');

const router = express.Router();

// à compléter
router.post('/login', authController.login);

// route de test JWT
router.get('/testConsumer', authenticateJWTConsumer, authController.testConsumer);

// route de test JWT
router.get('/testPro', authenticateJWTPro, authController.testPro);

// traitement formulaire inscription
router.post('/signupPro', authController.signupPro);

router.use(errorHandler);

module.exports = router;
