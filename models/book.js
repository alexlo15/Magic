const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema({
  bookId: {
    type: String
  },
  title: {
    type: String
  },
  authors: {
    type: Array
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String
  }
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;
