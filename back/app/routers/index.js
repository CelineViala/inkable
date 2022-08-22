const express = require('express');
const {
    consumerController,
    proController,
    appointmentController,
    projectController,
    authController,
} = require('../controllers');
const { errorHandler } = require('../helpers/errorHandler');
const {
    projectCreateSchema,
    projectUpdateSchema,
    consumerCreateSchema,
    consumerUpdateSchema,
    proCreateSchema,
    proUpdateSchema,
    appointmentCreateSchema,
    appointmentUpdateSchema,

} = require('../validation/schemas');

const validate = require('../validation/validator');

const router = express.Router();

const authenticateJWT = require('../middlewares/authenticateJWT');


// Routes de test
router.get('/api', (req, res) => {
    res.send('hello world');
});
router.get('/api/ping', (req, res) => {
    res.send('pong');
});

//! Première route pas encore fonctionnelle !
// Routes pour la partie Pro
router.get('/api/pro', proController.getAllPro);
router.post('/api/pro', proController.AddPro);

router.post('/api/pro/search', validate('body', proCreateSchema), proController.CreateSearch);

router.get('/api/pro/:id', proController.getOnePro);
router.patch('/api/pro/:id', validate('body', proUpdateSchema), proController.modifyPro);
router.delete('/api/pro/:id', proController.deletePro);

router.get('/api/pro/:id/tatouages', proController.getAllTattoosByPro);
router.post('/api/pro/:id/tatouages', proController.addTattoo);
router.delete('/api/pro/:id/tatouages/:id', proController.deleteTattoo);

// Routes pour la partie RDV
router.get('/api/pro/:id/rdv', appointmentController.getAllApointmentsByPro);
router.post('/api/pro/:id/rdv', validate('body', appointmentCreateSchema), appointmentController.addAppointement);
router.patch('/api/pro/:id/rdv', validate('body', appointmentUpdateSchema), appointmentController.modifyAppointement);
router.delete('/api/pro/:id/rdv', appointmentController.deleteAppointement);

// Routes pour la partie particulier
router.post('/api/consumer', validate('body', consumerCreateSchema), consumerController.addConsumer);

router.get('/api/consumer/:id', consumerController.getOneConsumer);
router.patch('/api/consumer/:id', validate('body', consumerUpdateSchema), consumerController.modifyConsumer);
router.delete('/api/consumer/:id', consumerController.deleteConsumer);

// Routes pour la partie projet
router.get('/api/projet/:id', projectController.getOneProject);
router.post('/api/projet', validate('body', projectCreateSchema), projectController.createProject);
router.patch('/api/projet/:id', validate('body', projectUpdateSchema), projectController.modifyProject);
router.delete('/api/projet/:id', projectController.deleteProject);

router.get('/api/pro/:id/projet', projectController.getAllProjectsByPro);
router.get('/api/consumer/:id/projet', projectController.getAllProjectsByConsumer);
router.post('/signupPro', validate('body', proCreateSchema), authController.signupPro);
router.post('/signupConsumer', validate('body', consumerCreateSchema), authController.signupConsumer);
router.post('/login', authController.login);

// route de test JWT
// router.get('/testConsumer', authenticateJWT, authController.testConsumer);
// route de test JWT
// router.get('/testPro', authenticateJWT, authController.testPro);
router.get('/checkRole', authenticateJWT, authController.verifyToken);

router.use(errorHandler);
module.exports = router;
