const router = require('express').Router();
const bookRoutes = require('./book-routes');
const userRoutes = require('./user-routes');
const cardRoutes = require('./card-routes');

router.use('/books', bookRoutes);
router.use('/quiz', userRoutes);
router.use('/Guild', userRoutes);
router.use('/cardlist', cardRoutes);

module.exports = router;
