const router = require('express').Router();

const {

    getUserResults,
    saveUserResult

} = require("../../controllers/user-controller")

router
    .route('/')
    .get(getUserResults)
    .post(saveUserResult);

module.exports = router;