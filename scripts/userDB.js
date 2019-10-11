const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/mtg-db");

const userSeed = [

    {
        userName: "Ash Ketchum",
        color1: "Red",
        color2: "Blue",
        guildMatch: "Izzet League"
    },
    {
        userName: "Misty Rainforest",
        color1: "Green",
        color2: "Blue",
        guildMatch: "Simic Combine"
    },
    {
        userName: "Brook Lopez",
        color1: "Black",
        color2: "Green",
        guildMatch: "Golgari Swarm"
    },
    {
        userName: "Lebron James",
        color1: "White",
        color2: "Black",
        guildMatch: "Orzhov Syndicate"
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
