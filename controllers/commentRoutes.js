const router = require('express').Router();
const authorizeCheck = require('../utils/loggedIn');
const { Blogpost, Comment } = require('../models');


// get ALL comments for a particular post
router.get('/:id', authorizecheck, async (req,res) => {
    try {
        const postComments = Comment.findAll({ // sequelize 'SELECT * FROM COMMENTS WHERE comment.id....
            where: { post_id: req.params.id },
            order: [ 'date_created', 'ASC' ] // ORDER BY date ascending
        });
        const plainComments = postComments.map((comment) => {
            comment.get({ plain: true }); // serialize to simpler JS object
        });
        res.status(200).json(plainComments); // respond status ok
    } catch (err) {
        res.status(500).json(err); // error
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

        res.status(200).json(newComment); // status ok
    } catch (err) {
        res.status(400).json(err); // error
    };
});

// Edit comment
router.put('/:id', authorizeCheck, async (req,res) => {
    try {
        const thisComment = await Comment.findByPk(req.params.id).get({ plain: true }); // target comment
        if (thisComment.user_id !== req.session.user_id) { // ownership check. Testing negative case
            throw new Error('the user is attempting to edit a comment that isn\'t theirs'); // error
        } else {
            Comment.update(req.body, { // use the request body for content
                where: {
                    id: req.params.id, // where the URL path identifies this comment
                }
            });
            res.status(200).json(req.body); // status ok
        };
    } catch (err) {
        res.status(500).json(err); // error
    };
});

// Delete comment
router.destroy('/:id', authorizeCheck, async (req,res) => {
    try {
        const thisComment = await Comment.findByPk(req.params.id).get({ plain: true }); // target a comment
        if (thisComment.user_id !== req.session.user_id) { // make sure this user has rights to it
            throw new Error('the user is attempting to edit a comment that isn\'t theirs');
        } else {
            Comment.destroy({ // delete the comment from the DB
                where: {
                    id: req.params.id, // targeting comment in DB
                }
            });
            res.status(200).json('comment deleted'); // status ok
        };
    } catch (err) {
        res.status(500).json(err); // error
    };
})

module.exports= router;