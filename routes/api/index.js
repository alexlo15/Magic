const router = require('express').Router();
const userRoutes = require('./user-routes');
const cardRoutes = require('./card-routes');
const deckRoutes = require('./deck-routes');

router.use('/quiz', userRoutes);
router.use('/Guild', userRoutes);
router.use('/cardlist', cardRoutes);
router.use('/decklist', deckRoutes);


module.exports = router;
