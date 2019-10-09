const { Book } = require('../models');


const getSavedBooks = (req, res) => {
  Book.find({})
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

const saveBook = (req, res) => {
  Book.create(req.body)
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

const removeBook = (req, res) => {
  Book.remove({
    _id: req.params.id
  })
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

module.exports = {
  getSavedBooks,
  saveBook,
  removeBook
};
