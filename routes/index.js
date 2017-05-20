const express = require('express');

const bookController = require('../controllers/bookController');
// this is required for the database to connect

const router = express.Router();


/* GET home page. */
router.get('/', bookController.getBooks);

router.post('/', bookController.createBook);

router.get('/book/:id/edit', bookController.editBook);

router.post('/book/:id', bookController.updateBook);

router.get('/book/:id', bookController.deleteBook);


module.exports = router;
