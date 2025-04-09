const express = require('express');

const router = express.Router();

const reservationController = require('../controllers/reservationController');

router.get('/search', reservationController.hotelSearch);
router.get('/', reservationController.findAll);
router.post('/', reservationController.create);
router.get('/:id', reservationController.findBy);
router.put('/:id', reservationController.update);
router.delete('/:id', reservationController.deleteOne);
module.exports = router;

