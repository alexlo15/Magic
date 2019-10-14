const mongoose = require('mongoose');

const { Schema } = mongoose;

const CardSchema = new Schema({

    cardID: {
        type: String
    },
    image: {
        type: String
    },
    name: {
        type: String
    },
    cmc: {
        type: String
    },
    colorIdentity: {
        type: String
    },
    cardType: {
        type: String
    }
});

const Card = mongoose.model('card', CardSchema);

module.exports = Card;