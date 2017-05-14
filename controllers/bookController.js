const mongoose = require('mongoose');
const Book = require('../models/Books');

exports.getBooks = (req, res) => {
  Book.find()
    .then(books => {
      console.log(books); // this shows the db is empty
      res.render('index', {
        title: 'Stored Books',
        books: books
      });
    });
  // console.log(books); - this was causing the program to crash
};

exports.createBook = async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  console.log(book);
  res.redirect('/');
};
