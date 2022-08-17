const express = require('express');
const {
  consumerController,
  proController,
  appointmentController,
  projectController
  }=require('../controllers');
const router = express.Router();

//Routes de test
router.get('/api', (req, res) => {
  res.send('hello world');
});
router.get('/api/ping', (req, res) => {
  res.send('pong');
});

//!Première route pas encore fonctionnelle !
// Routes pour la partie Pro
router.get('/api/pro', proController.getAllPro);
router.post('/api/pro', proController.AddPro);

router.post('api/pro/search', proController.CreateSearch);

router.get('api/pro/:id', proController.getOnePro);
router.patch('api/pro/:id', proController.modifyPro);
router.delete('api/pro/:id', proController.deletePro);

router.get('api/pro/:id/tatouages', proController.getAllTattoosByPro);
router.post('api/pro/:id/tatouages', proController.addTattoo);
router.delete('api/pro/:id/tatouages/:id', proController.deleteTattoo);

// Routes pour la partie RDV
router.get('api/pro/:id/rdv', appointmentController.getAllApointmentsByPro);
router.post('api/pro/:id/rdv', appointmentController.addAppointement);
router.patch('api/pro/:id/rdv', appointmentController.modifyAppointement);
router.delete('api/pro/:id/rdv', appointmentController.deleteAppointement);

// Routes pour la partie particulier
router.post('api/consumer', consumerController.addConsumer);

router.get('api/consumer/:id', consumerController.getOneConsumer);
router.patch('api/consumer/:id', consumerController.modifyConsumer);
router.delete('api/consumer/:id', consumerController.deleteConsumer);

// Routes pour la partie projet
router.get('api/projet/:id', projectController.getOneProject);
router.post('api/projet/:id', projectController.createProject);
router.patch('api/projet/:id', projectController.modifyProject);
router.delete('api/projet/:id', projectController.deleteProject);

router.get('api/pro/:id/projet', projectController.getAllProjectsByPro);
router.get('api/consumer/:id/projet', projectController.getAllProjectsByConsumer);

module.exports = router;
