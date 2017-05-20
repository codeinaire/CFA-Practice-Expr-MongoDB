const express = require('express');

const path = require('path');

const favicon = require('serve-favicon');

const logger = require('morgan');

const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');
// include mongoose module
const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');

require('dotenv').config({ path: 'variables.env' });

// sign with default (HMAC SHA256)
// var jwt = require('jsonwebtoken');
// var token = jwt.sign({ testing: 'testing' }, 'secret');
// // secret is used to encrypt anything in the app and is usually in the process.env.var fill
var token = jwt.sign({ email: 'john@john.com' }, 'secretcode');
console.log(token)

// ROUTES
const index = require('./routes/index');
const users = require('./routes/users');
const books = require('./routes/api/v1/books');
const apiAuth = require('./middleware/apiAuth');

const app = express();

// if(config.util.getEnv('NODE_ENV') !== 'test') {
// 	//use morgan to log at command line
// 	app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
// }

// NOTE
// DB CONNECTION from model
  // so other model can connect to db.
  // open connection to the local mongo db
  mongoose.connect('mongodb://localhost/books');
  // connection via heroku deployment
// mongoose.connect(process.env.DBDEV);

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

app.use('/api*', apiAuth);
app.use('/', index);
app.use('/api', books);
app.use('/users', users);

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
