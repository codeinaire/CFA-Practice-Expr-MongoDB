const express = require('express');

const bookController = require('../../../controllers/bookController');

const router = express.Router();

const Book = require('../../../models/Books');

// API routes

router.get('/', bookController.apiGetBooks);

router.post('/', bookController.apiCreateBook);

router.get('/:book_id', bookController.apiGetBook);

router.put('/:book_id', bookController.apiUpdateBook);

router.delete('/:book_id', bookController.apiDeleteBook);

module.exports = router;
