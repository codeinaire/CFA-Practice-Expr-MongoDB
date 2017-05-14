const express = require('express');

const path = require('path');

const favicon = require('serve-favicon');

const logger = require('morgan');

const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');
// include mongoose module
const mongoose = require('mongoose');

// sign with default (HMAC SHA256)
var jwt = require('jsonwebtoken');
var token = jwt.sign({ testing: 'testing' }, 'secret');
// secret is used to encrypt anything in the app and is usually in the process.env.var file

// ROUTES
const index = require('./routes/index');
const users = require('./routes/users');
const books = require('./routes/api/v1/books');
const apiAuth = require('./middleware/apiAuth');

const app = express();

// NOTE
// DB CONNECTION from model
  // so other model can connect to db.
  // open connection to the local mongo db
  mongoose.connect('mongodb://localhost/books');

  // create a var to test db connection can also be:
  // var db = mongoose.connection;
  const { connection: db } = mongoose;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected to the books database');
  });
//

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/api/v1/*', apiAuth);
app.use('/api/v1/books', books);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
