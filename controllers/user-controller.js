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

    User.find({})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.json(err);
      });

};

module.exports = {

    saveUserResult,
    getUserResults

}