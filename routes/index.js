const express = require('express');

// this is required for the database to connect
const Book = require('../models/Book');

const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
