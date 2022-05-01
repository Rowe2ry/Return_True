const router = require('express').Router();
const loggedIn = require('../utils/loggedIn');
const { User, Blogpost, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {
        // TODO: change nav bar if logged in or not
        const homepage = await res.render('home'); // could have been anything I wanted
    } catch (err) {
        res.status(400).json(err);
    };
});

module.exports = router;