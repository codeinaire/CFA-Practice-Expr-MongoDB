const mongoose = require('mongoose');
const Book = require('../models/Books');

exports.getBooks = (req, res) => {
  Book.find()
    .then(books => {
      console.log('books = ', books); // this shows the db is empty
      res.render('index', {
        title: 'Stored Books',
        books: books
      });
    });
  // console.log(books); - this was causing the program to crash
};

exports.createBook = (req, res) => {
  const book = new Book(req.body);
  book.save()
    .then(res.redirect('/')
  );
};

exports.editBook = (req, res) => {
  Book.findOne({ _id: req.params.id })
    .then(book => {
      res.render('editBook', { book: book });
    });
};

exports.updateBook = (req, res) => {
  Book.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
  .then(
    res.redirect('/')
  );
};

exports.deleteBook = (req, res) => {
  Book.findOne({ _id: req.params.id })
    .then(book => {
      book.remove()
      .then(
        res.redirect('/')
      );
    });
  };


// APIs

exports.apiGetBooks = (req, res) => {
  Book.find()
    .then(books => {
      res.json(books)
    });
};

exports.apiCreateBook = (req, res) => {
  const book = Book(req.query);
  book.save()
    .then(() => {
      res.json(book)
    })
};

exports.apiGetBook = (req, res) => {
  Book.findById(req.params.book_id)
    .then(book => {
      res.json(book);
    });
};

exports.apiUpdateBook = (req, res) => {
  Book.findByIdAndUpdate(req.params.book_id, req.query)
    .then(book => {
      res.json(book);
    });
};

exports.apiDeleteBook = (req, res) => {
  const id = req.params.book_id;
  Book.findByIdAndRemove(id)
    .then(
      res.send('Book successfully deleted')
      );
};
