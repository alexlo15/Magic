const router = require('express').Router();

const {

    getUserResults,
    saveUsersResult

} = require("../../controllers/mtg-controller")

router
    .route('/quiz')
    .get(getUserResults)
    // .post(saveUsersResult);

module.exports = router;