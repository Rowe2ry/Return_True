const router = require('express').Router();
const loggedIn = require('../utils/loggedIn');
const { User, Blogpost, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {
        const allBlogs = await Blogpost.findAll();
        const plainBlogs = await allBlogs.map((blog) => {
            return blog.get({ plain: true });
            // all of the console.log comments below were debugging to find out I needed a "return" statement in my .map function
        });
        const blogTitlesOnly = await plainBlogs.map((blog) => {
            return blog.title;
        });
        // res.status(200).json(blogTitlesOnly);
        res.render('home', {
            blogTitlesOnly,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(400).json(err);
    };
});

module.exports = router;