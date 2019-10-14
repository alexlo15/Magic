const mongoose = require('mongoose');

const { Schema } = mongoose;

const CardSchema = new Schema({

    cardID: {
        type: String
    },
    cardPic: {
        type: String
    },
    cardName: {
        type: String
    },
    cardCMC: {
        type: String
    },
    colorIdentity: {
        type: Array
    },
    cardURI: {
        type: String
    },

});

const Card = mongoose.model('card', CardSchema);

module.exports = Card;