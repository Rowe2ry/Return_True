const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const blogRoutes = require('./blogpostRoutes');
const logInOut = require('./logInOutRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/', homeRoutes);
router.use('/blog', blogRoutes);
router.use('/account', logInOut);
router.use('/blog/comments', commentRoutes);

module.exports = router;