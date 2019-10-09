const router = require('express').Router();

const {
  getSavedBooks,
  saveBook,
  removeBook
} = require('../../controllers/book-controller');

// GET and POST at /api/books

router
  .route('/')
  .get(getSavedBooks)
  .post(saveBook);

// DELETE at /api/books/:id

router
  .route('/:id')
  .delete(removeBook);

module.exports = router;
