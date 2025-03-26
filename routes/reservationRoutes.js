const express = require('express');

const router = express.Router();

const reservationController = require('../controllers/reservationController');

router.get('/', reservationController.findAll);

module.exports = router;