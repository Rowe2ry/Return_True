const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const blogRoutes = require('./blogpostRoutes');

router.use('/', homeRoutes);
// router.use('/blog', blogRoutes);

module.exports = router;