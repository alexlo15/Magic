const router = require('express').Router();

const {

    getUserResults,
    saveUserResult,
    getThisColor1,
    getThisColor2,
    getGuilds1,

} = require("../../controllers/user-controller")

router
    .route('/')
    .get(getUserResults)
    .post(saveUserResult);


router
    .route("/Blue")
    .get(getThisColor1)
    .get(getThisColor2)

router
    .route("/Guild")
    .get(getGuilds1)

module.exports = router;