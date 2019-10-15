const { Deck } = require('../models');

const getAllDecks = (req, res) => {
    Deck.find({})
        .then(dbBookData => res.json(dbBookData))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
};

const saveDeck = (req, res) => {
    Deck.create(req.body)
        .then(dbBookData => res.json(dbBookData))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
};

const deleteDeck = (req, res) => {
    Deck.remove({
        _id: req.params.id
    })
        .then(dbBookData => res.json(dbBookData))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
};

module.exports ={
    saveDeck,
    getAllDecks,
    deleteDeck,
}