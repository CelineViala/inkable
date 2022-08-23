const express = require('express');
const ApiError = require('../errors/apiError');
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
    tattooCreateSchema,
    tattooUpdateSchema,
    proCreateSchema,
    proUpdateSchema,
    appointmentCreateSchema,
    appointmentUpdateSchema,
    loginCreateSchema,

} = require('../validation/schemas');

const controllerHandler = require('../helpers/controllerHandler');
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

// Routes pour la partie Pro

router.get('/api/pro', controllerHandler(proController.getAllPro));

router.post('/api/pro/search', controllerHandler(proController.CreateSearch));

router.route('/api/pro/:id')
    .get(controllerHandler(proController.getOnePro))
    .patch(validate('body', proUpdateSchema), controllerHandler(proController.modifyPro))
    .delete(controllerHandler(proController.deletePro));

router.route('/api/pro/:id/tatouages')
    .get(controllerHandler(proController.getAllTattoosByPro))
    .post(validate('body', tattooCreateSchema), controllerHandler(proController.addTattoo));

router.delete('/api/pro/:idPro/tatouages/:idTattoo', controllerHandler(proController.deleteTattoo));

// Routes pour la partie RDV
router.route('/api/pro/:id/rdv')
    .get(controllerHandler(appointmentController.getAllApointmentsByPro))
    .post(validate('body', appointmentCreateSchema), controllerHandler(appointmentController.addAppointement));

router.route('/api/pro/:idPro/rdv/:idRdv')
    .patch(validate('body', appointmentUpdateSchema), controllerHandler(appointmentController.modifyAppointement))
    .delete(controllerHandler(appointmentController.deleteAppointement));

router.route('/api/consumer/:id')
    .get(controllerHandler(consumerController.getOneConsumer))
    .patch(validate('body', consumerUpdateSchema), controllerHandler(consumerController.modifyConsumer))
    .delete(controllerHandler(consumerController.deleteConsumer));

// Routes pour la partie projet
router.route('/api/projet/:id')
    .get(controllerHandler(projectController.getOneProject))
    .patch(validate('body', projectUpdateSchema), controllerHandler(projectController.modifyProject))
    .delete(controllerHandler(projectController.deleteProject));
router.post('/api/projet', validate('body', projectCreateSchema), controllerHandler(projectController.createProject));
router.get('/api/pro/:id/projet', controllerHandler(projectController.getAllProjectsByPro));
router.get('/api/consumer/:id/projet', controllerHandler(projectController.getAllProjectsByConsumer));

// Route pour l'authentification
router.post('/signupPro', validate('body', proCreateSchema), controllerHandler(authController.signupPro));
router.post('/signupConsumer', validate('body', consumerCreateSchema), controllerHandler(authController.signupConsumer));
router.post('/login', validate('body', loginCreateSchema), controllerHandler(authController.login));

// route de test JWT
// router.get('/testConsumer', authenticateJWT, authController.testConsumer);
// route de test JWT
// router.get('/testPro', authenticateJWT, authController.testPro);
router.get('/checkRole', authenticateJWT, authController.verifyToken);

router.use(() => {
    throw new ApiError('API Route not found', { statusCode: 404 });
});
router.use(errorHandler);
module.exports = router;
