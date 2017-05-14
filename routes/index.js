const express = require('express');

const bookController = require('../controllers/bookController');
// this is required for the database to connect
const Book = require('../models/Books');

const router = express.Router();


/* GET home page. */
router.get('/', bookController.getBooks);

router.post('/', bookController.createBook);

router.get('/book/:id/edit', bookController.editBook);

router.post('/book/:id/edit', bookController.updateBook);

router.get('/book/:id', bookController.deleteBook);

// API routes

router.get('/api/v1/books', bookController.apiGetBooks);

router.post('/api/v1/books', bookController.apiCreateBook);

router.get('/api/v1/books/:book_id', bookController.apiGetBook);

router.put('/api/v1/books/:book_id', bookController.apiUpdateBook);

router.delete('/api/v1/books/:book_id', bookController.apiDeleteBook);

module.exports = router;
