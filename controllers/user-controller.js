// const mtg = require("mtgsdk");
const { User } = require('../models');

const saveUserResult = (req, res) => {
    User.create(req.body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
};

const getUserResults = (req, res) => {

    User.find()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.json(err);
        });

};

const getThisColor1 = (req, res) => {
    User.find({ color1: req })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
};

const getThisColor2 = (req, res) => {
    User.find({ color2: req })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
};


const getGuilds1 = (req, res) => {
    User.distinct("guildMatch")
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.json(err);
        });
}

module.exports = {

    saveUserResult,
    getUserResults,
    getThisColor1,
    getThisColor2,
    getGuilds1,

}