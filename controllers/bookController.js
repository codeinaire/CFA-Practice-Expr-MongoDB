const mongoose = require('mongoose');
const Book = require('../models/Books');

exports.getBooks = (req, res) => {

//   let query = Book.find({});
// 	query.exec((err, books) => {
// 		if(err) res.send(err);
// 		//If no errors, send them back to the client
// 		res.json(books);
// });
  console.log('Not-api');
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
  console.log(req.body);
  const newBook = new Book(req.body);
  // Save it into the DB.
  newBook.save((err, book) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else { // If no errors, send it back to the client
      res.redirect('/');
    }
  });
//   const book = new Book(req.body);
//   console.log("in new book");
//   book.save()
//     .then(
//       res.redirect('/')
//     );
};

exports.editBook = (req, res) => {
  Book.findOne({ _id: req.params.id })
    .then(book => {
      res.render('editBook', { book: book });
    });
};

exports.updateBook = (req, res) => {
  console.log('put request');
  console.log(res.body);
  Book.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
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
  const book = Book(req.headers || req.query);
  book.save()
    .then(() => {
      res.json(book)
    })
};

// this works when I put :book_id before the JWT
exports.apiGetBook = (req, res) => {
  Book.findById(req.params.book_id)
    .then(book => {
      res.json(book);
    });
};

exports.apiUpdateBook = (req, res) => {
  let newValues = req.query || req.headers;
  Book.findByIdAndUpdate(req.params.book_id, newValues)
    .then(book => {
      res.json('successfully updated!');
    });
};

exports.apiDeleteBook = (req, res) => {
  const id = req.params.book_id;
  Book.findByIdAndRemove(id)
    .then(
      res.send('Book successfully deleted')
      );
};
