const router = require('express').Router();

const {

    getUserResults,
    saveUserResult,
    getThisColor1,
    getThisColor2

} = require("../../controllers/user-controller")

router
    .route('/')
    .get(getUserResults)
    .post(saveUserResult);


router
    .route("/Blue")
    .get(getThisColor1)
    .get(getThisColor2)

module.exports = router;