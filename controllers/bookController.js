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
  const book = new Book('In req.body:', req.body);
  await book.save();
  console.log(book);
  res.redirect('/');
};

exports.editBook = (req, res) => {
  Book.findOne({ _id: req.params.id })
  // console.log('book_obj = ', book_obj)
    .then(book => {
      console.log('book = ', book);
      res.render('editBook', { book: book });
    });
};

exports.updateBook = (req, res) => {
  Book.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
  .then(book => {
    res.redirect('/')
  });
};
