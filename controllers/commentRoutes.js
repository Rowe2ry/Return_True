const router = require('express').Router();
const loggedIn = require('../utils/loggedIn');
const { Blogpost, Comment } = require('../models');


// get ALL comments for a particular post
router.get('/:id', async (req,res) => {
    try {
        const postComments = Comment.findAll({
            where: { post_id: req.params.id },
            order: [ 'date_created', 'ASC' ]
        });
        const plainComments = postComments.map((comment) => {
            comment.get({ plain: true });
        });
        res.status(200).json(plaincomments);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports= router;