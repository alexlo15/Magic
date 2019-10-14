const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/mtg-db");

const cardSeed = [
    {
        cardCMC: "{W}",
        cardID: "6ff9af62-1895-465a-b1f3-61f0d8318958",
        cardName: "Swords to Plowshares",
        cardPic: "https://img.scryfall.com/cards/normal/front/6/f/6ff9af62-1895-465a-b1f3-61f0d8318958.jpg?1562917388",
        cardURI: "https://api.scryfall.com/cards/6ff9af62-1895-465a-b1f3-61f0d8318958",
        colorIdentity: ["W"],
    }, {
        cardCMC: "{1}",
        cardID: "83c01c91-ea01-46c7-b94c-97777b968459",
        cardName: "Sensei's Divining Top",
        cardPic: "https://img.scryfall.com/cards/normal/front/8/3/83c01c91-ea01-46c7-b94c-97777b968459.jpg?1562170198",
        cardURI: "https://api.scryfall.com/cards/83c01c91-ea01-46c7-b94c-97777b968459",
        colorIdentity: [],
    }, {
        cardCMC: "",
        cardID: "e0b52b9c-7278-46b4-9f3c-3a7fc0c7e526",
        cardName: "Clifftop Retreat",
        cardPic: "https://img.scryfall.com/cards/normal/front/e/0/e0b52b9c-7278-46b4-9f3c-3a7fc0c7e526.jpg?1562744267",
        cardURI: "https://api.scryfall.com/cards/e0b52b9c-7278-46b4-9f3c-3a7fc0c7e526",
        colorIdentity: ["R", "W"]
    }
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
