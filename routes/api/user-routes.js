const router = require('express').Router();

const {

    getUserResults,
    saveUserResult,
    getGuilds1,

} = require("../../controllers/user-controller")

router
    .route('/')
    .get(getUserResults)
    .post(saveUserResult)


router
    .route("/Guild")
    .get(getGuilds1)

module.exports = router;