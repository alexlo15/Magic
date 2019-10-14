const router = require('express').Router();

const {

    getSavedCards

} = require("../../controllers/card-controller")

router
    .route('/cardlist')
    .get(getSavedCards)


module.exports = router;