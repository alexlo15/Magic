const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/mtg-db");

const userSeed = [

    {
        userName: "Ash Ketchum",
        color1: "Red",
        color2: "Blue",
        guildMatch: "Izzet League",
        timestamp: Date.now
    },
    {
        userName: "Misty Rainforest",
        color1: "Green",
        color2: "Blue",
        guildMatch: "Simic Combine",
        timestamp: Date.now
    },
    {
        userName: "Brook Lopez",
        color1: "Black",
        color2: "Green",
        guildMatch: "Golgari Swarm",
        timestamp: Date.now

    },
    {
        userName: "Lebron James",
        color1: "White",
        color2: "Black",
        guildMatch: "Orzhov Syndicate",
        timestamp: Date.now
    },

];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
