const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/mtg-db");


const deckSeed = [
    {
        deckName: "Kaalia Fatties",
        deckCMDR: {
            cardID: "5c509c36-43a8-454e-80fc-321f41981049",
            cardName: "Kaalia of the Vast",
            cardPic: "https://img.scryfall.com/cards/small/front/5/c/5c509c36-43a8-454e-80fc-321f41981049.jpg?1562633935",
        },
        the99: [
            { cardID: "83c01c91-ea01-46c7-b94c-97777b968459" },
            { cardID: "6ff9af62-1895-465a-b1f3-61f0d8318958" },
            { cardID: "83c01c91-ea01-46c7-b94c-97777b968459" },
            { cardID: "6ff9af62-1895-465a-b1f3-61f0d8318958" },
            { cardID: "83c01c91-ea01-46c7-b94c-97777b968459" },
            { cardID: "6ff9af62-1895-465a-b1f3-61f0d8318958" },
            { cardID: "83c01c91-ea01-46c7-b94c-97777b968459" },
            { cardID: "6ff9af62-1895-465a-b1f3-61f0d8318958" },
            { cardID: "83c01c91-ea01-46c7-b94c-97777b968459" },
            { cardID: "6ff9af62-1895-465a-b1f3-61f0d8318958" },
        ],
        colorIdentity: ["W", "B", "R"],
        creator: "Alex Lo",
    }
];

db.Deck
    .remove({})
    .then(() => db.Deck.collection.insertMany(deckSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
