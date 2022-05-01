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

// TODO: get one blogpost | gotta be logged in to see details
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

// TODO: edit a blogpost | DEFINITELY gotta be logged in to edit a post, and it has to be YOUR post
router.put('/:id', authorizeCheck ,async (req,res) => {
    try {
        // TODO; make sure the blogpost's user_id property matches this user's id
        Blogpost.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json('post updated');
    } catch (err) {
        res.status(500).json(err);
    };
})

// TODO: delete a blogpost | DEFINITELY the same requirement as editing to delete
router.delete('/:id', authorizeCheck, async (req,res) => {
    try {
        // TODO: check authorization
        Blogpost.destroy({
            where: {
                id: req.params.is
            }
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;