const express = require('express');

const router = express.Router();

const reservationController = require('../controllers/reservationController');

/**
 * @swagger
 * /reservations/search:
 *   get:
 *     summary: Get filtered reservations
 *     description: Returns a list of reservations filtered by hotel, check-in/check-out dates, guests, and room type.
 *     parameters:
 *       - in: query
 *         name: hotel
 *         schema:
 *           type: string
 *         example: "Hotel California"
 *         description: Name of the hotel
 *       - in: query
 *         name: checkin
 *         schema:
 *           type: string
 *           format: date
 *         example: "2023-10-01"
 *         description: Check-in date
 *       - in: query
 *         name: checkout
 *         schema:
 *           type: string
 *           format: date
 *         example: "2023-10-05"
 *         description: Check-out date
 *       - in: query
 *         name: guests
 *         schema:
 *           type: integer
 *         example: 2
 *         description: Number of guests
 *       - in: query
 *         name: roomType
 *         schema:
 *           type: string
 *         example: "double"
 *         description: Type of room
 *     responses:
 *       200:
 *         description: A list of filtered reservations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 */
router.get('/search', reservationController.hotelSearch);

/**
 * @swagger
 * /reservations:
 *   get:
 *     summary: Get all reservations
 *     description: Returns a list of all reservations.
 *     responses:
 *       200:
 *         description: A list of reservations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 */
router.get('/', reservationController.findAll);

/**
 * @swagger
 * /reservations:
 *   post:
 *     summary: Create a new reservation
 *     description: Creates a new reservation.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - name
 *               - phone
 *               - email
 *               - date
 *               - checkin
 *               - checkout
 *               - adults
 *               - children
 *               - numberGuests
 *               - roomType
 *               - status
 *               - roomNumber
 *               - hotel
 *             properties:
 *                id:
 *                  type: integer
 *                  example: 
 *                name:
 *                  type: string
 *                  example: "Juan Perez"
 *                phone:
 *                  type: string
 *                  example: "123456789"
 *                email:
 *                  type: string
 *                  example: "juan@gmail.com"
 *                date:
 *                  type: string
 *                  format: date
 *                  example: "2023-10-01"
 *                checkin:
 *                  type: string
 *                  format: date
 *                  example: "2023-10-01"
 *                checkout:
 *                  type: string
 *                  format: date
 *                  example: "2023-10-05"
 *                adults:
 *                  type: integer
 *                  example: 2
 *                children:
 *                  type: integer
 *                  example: 0
 *                numberGuests:
 *                  type: integer
 *                  example: 2
 *                status:
 *                  type: string
 *                  example: "confirmed"
 *                roomNumber:
 *                  type: integer
 *                  example: 101
 *                roomType:
 *                  type: string
 *                  example: "double"
 *                hotel:
 *                  type: string
 *                  example: "Marriott"
 *     responses:
 *       201:
 *         description: Reservation created successfully
 */
router.post('/', reservationController.create);

/**
 * @swagger
 * /reservations/{id}:
 *   get:
 *     summary: Get a reservation by ID
 *     description: Returns a reservation by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A reservation object
 */
router.get('/:id', reservationController.findBy);

/**
 * @swagger
 * /reservations/{id}:
 *   put:
 *     summary: Update a reservation by ID
 *     description: Updates a reservation by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           required: id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone
 *               - email
 *               - date
 *               - checkin
 *               - checkout
 *               - adults
 *               - children
 *               - numberGuests
 *               - roomType
 *               - status
 *               - roomNumber
 *               - hotel
 *             properties:
 *                name:
 *                  type: string
 *                  example: "Juan Perez"
 *                phone:
 *                  type: string
 *                  example: "123456789"
 *                email:
 *                  type: string
 *                  example: "juan@gmail.com"
 *                date:
 *                  type: string
 *                  format: date
 *                  example: "2023-10-01"
 *                checkin:
 *                  type: string
 *                  format: date
 *                  example: "2023-10-01"
 *                checkout:
 *                  type: string
 *                  format: date
 *                  example: "2023-10-05"
 *                adults:
 *                  type: integer
 *                  example: 2
 *                children:
 *                  type: integer
 *                  example: 0
 *                numberGuests:
 *                  type: integer
 *                  example: 2
 *                status:
 *                  type: string
 *                  example: "confirmed"
 *                roomNumber:
 *                  type: integer
 *                  example: 101
 *                roomType:
 *                  type: string
 *                  example: "double"
 *                hotel:
 *                  type: string
 *                  example: "Marriott"
 *     responses:
 *       201:
 *         description: Reservation created successfully
 */
router.put('/:id', reservationController.update);

/**
 * @swagger
 * /reservations/{id}:
 *   delete:
 *     summary: Delete a reservation by ID
 *     description: Deletes a reservation by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reservation deleted successfully
 */
router.delete('/:id', reservationController.deleteOne);

module.exports = router;
