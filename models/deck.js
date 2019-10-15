const mongoose = require('mongoose');

const { Schema } = mongoose;

const DeckSchema = new Schema({

    deckName: {
        type: String
    },
    deckCMDR: {
        type: Object,
    },
    the99: {
        type: Array,
    },
    colorIdentity: {
        type: Array,
    },
    creator: {
        type: String,
    }

});

const Deck = mongoose.model('deck', DeckSchema);

module.exports = Deck;