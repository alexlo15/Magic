const router = require('express').Router();

const {

    getUserResults,
    saveUserResult

} = require("../../controllers/user-controller")

router
    .route('/quiz')
    .get(getUserResults)
    .post(saveUserResult);

module.exports = router;