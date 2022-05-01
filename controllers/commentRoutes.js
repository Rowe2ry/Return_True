const router = require('express').Router();
const authorizeCheck = require('../utils/loggedIn');
const { Blogpost, Comment } = require('../models');


// get ALL comments for a particular post
router.get('/:id', authorizecheck, async (req,res) => {
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

// add a comment to a post
router.post('/:id', authorizeCheck, async (req,res) => {
    try {
        
        const newComment = await {
            content: req.body.content, // comment from body (value field in HTML)
            user_id: req.session.user_id, // current user id from session
            post_id: req.params.id, // the post id being commented on
        };
        
        const addComment = Comment.create(newComment); // add to database under the comment model

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    };
});

// TODO: edit comment
router.put('/:post_id/:id', authorizeCheck, async (req,res) => {
    try {
        Comment.update(req.body, {
            where: {
                id: req.params.id,
                post_id: req.params.post_id,
            }
        });
        res.status(200).json(req.body);
    } catch (err) {
        res.status(500).json(err);
    };
});

// TODO: delete comment
router.destroy('/:post_id/:id', authorizeCheck, async (req,res) => {
    try {
        // TODO: check to make sure the post also has the user id property of the current user
        Comment.destroy({
            where: {
                id: req.params.id,
                post_id: req.params.post_id
            }
        });
        res.status(200).json('comment deleted');
    } catch (err) {
        res.status(500).json(err);
    };
})

module.exports= router;