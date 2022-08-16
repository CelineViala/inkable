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
router.get('/api/pro', proController.getAll);


module.exports = router;
