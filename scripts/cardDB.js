const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/mtg-db");

const cardSeed = [

    {
        cardID: "2334124",
        image: "image.com",
        name: "Gitrog Monster LOL",
        cmc: "3BG",
        colorIdentity: "Black Green",
        cardType: "Legendary Creature",

    },
    {
        cardID: "2312312312324",
        image: "lolbye.com",
        name: "Mana Crypt",
        cmc: "0",
        colorIdentity: "Colorless",
        cardType: "Artifact",

    },
];

db.Card
    .remove({})
    .then(() => db.Card.collection.insertMany(cardSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
