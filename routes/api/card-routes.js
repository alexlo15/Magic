const router = require('express').Router();

const {
    getSavedCards,
    saveCard,
    removeCard,
} = require("../../controllers/card-controller")

router
    .route('/')
    .get(getSavedCards)
    .post(saveCard);

router
    .route('/:id')
    .delete(removeCard);


module.exports = router;