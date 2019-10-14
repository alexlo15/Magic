const { Card } = require('../models');

const getSavedCards = (req, res) => {
    Card.find({})
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};
const saveCard = (req, res) => {
    Card.create(req.body)
        .then(dbBookData => res.json(dbBookData))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
};

const removeCard = (req, res) => {
    Card.remove({
      cardID: req.params.id
    })
      .then(dbBookData => res.json(dbBookData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  };

module.exports = {
    getSavedCards,
    saveCard, 
    removeCard,
}