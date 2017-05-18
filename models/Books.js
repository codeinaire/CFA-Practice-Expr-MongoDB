// include mongoose module
const mongoose = require('mongoose');
// include slug module
const slug = require('slug');
// beginning of the model, everything in mongoose starts
// with the schema which maps to a mongodb collection &
// maps the shape of that collection. Can also be:
// var Schema = mongoose.Schema;
const { Schema } = mongoose;

// mongoose.Promise = global.Promise;

// schema for the db
const bookSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter book name!',
  },
  author: {
    type: String,
    trim: true,
    required: 'Please enter author name!',
  },
  description: {
    type: String,
    trim: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  slug: String,
});

bookSchema.pre('save', function (next) {
  // if the stores name is not modified we'll skip this functio
  if (!this.isModified('name')) {
    next();
    return;
  }
  // this saves it before every save, but we want to be moer scfcity
  this.slug = slug(this.name);
  next();
});

// this creates the actual model based off of the schema
// we just created.
const Book = mongoose.model('Book', bookSchema);

// This makes this whole Book object available
// outside of the file
module.exports = Book;
