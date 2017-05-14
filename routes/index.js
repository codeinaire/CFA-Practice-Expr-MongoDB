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

module.exports = router;
