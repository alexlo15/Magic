const router = require('express').Router();

const {
    getAllDecks,
    saveDeck, 
    deleteDeck
    
} = require("../../controllers/deck-controller")

router
    .route('/')
    .get(getAllDecks)
    .post(saveDeck);

router
    .route('/:id')
    .delete(deleteDeck);


module.exports = router;