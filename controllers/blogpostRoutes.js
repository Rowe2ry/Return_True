const router = require('express').Router();
const { User, Blogpost, Comment } = require('../models');
const comment = require('./commentRoutes');
const authorizeCheck = require('../utils/loggedIn');

// view all blogposts
router.get('/', async (req,res) => {
    try {
        const allBlogs = await Blogpost.findAll();
        const plainBlogs = allBlogs.map((blog) => {
            blog.get({ plain: true });
        })
        res.status(200).json(plainBlogs);
    } catch (err) {
        res.status(400).json(err);
    }
});

// TODO: get one blogpost
router.get('/:id', authorizeCheck, async (req,res) => {
    try {
        const thisPost = await Blogpost.findByPk(req.params.id);
        if (!thisPost) {
            throw new Error('Blogpost could not be found');
        } else {
            const plainPost = thisPost.get( { plain: true }); // possibly might have to add an index of "[0]" before the .get
            res.status(200).json(thisPost);
        };
    } catch (err) {
        res.status(500).json(err);
    };
});

// TODO: edit a blogpost

// TODO: delete a blogpost

module.exports = router;