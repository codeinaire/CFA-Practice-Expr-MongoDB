const express = require('express');

const bookController = require('../../../controllers/bookController');

const router = express.Router();

// API routes

router.get('/api/', bookController.apiGetBooks);

router.post('/api/', bookController.apiCreateBook);

router.get('/api/:book_id', bookController.apiGetBook);

router.put('/api/:book_id', bookController.apiUpdateBook);

router.delete('/api/:book_id', bookController.apiDeleteBook);

module.exports = router;
