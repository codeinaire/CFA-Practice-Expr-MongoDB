const express = require('express');

const bookController = require('../controllers/bookController');
// this is required for the database to connect
const Book = require('../models/Books');

const router = express.Router();


/* GET home page. */
router.get('/', bookController.getBooks);

router.post('/', bookController.createBook);

module.exports = router;
