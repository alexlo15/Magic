const router = require('express').Router();
const bookRoutes = require('./book-routes');
const userRoutes = require('./user-routes');

router.use('/books', bookRoutes);
router.use('/quiz', userRoutes);
module.exports = router;
