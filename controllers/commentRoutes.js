const router = require('express').Router();
const authorizeCheck = require('../utils/loggedIn');
const { Blogpost, Comment } = require('../models');


// get ALL comments for a particular post
// TODO: add "authorizeCheck" middleware once sessions are started
router.get('/:id', async (req,res) => {
    try {
        const postComments = await Comment.findAll({ // sequelize 'SELECT * FROM COMMENTS WHERE comment.post_id = blogpost.id....
            where: { post_id: req.params.id },
            // order: [ 'date_created', 'ASC' ] // ORDER BY date ascending
        });
        if (!postComments) {
            throw new Error ('could not find comments for that post');
        } else {
            const plainComments = postComments.map((comment) => {
            return comment.get({ plain: true }); // serialize to simpler JS object
            });
            res.status(200).json(plainComments);
        };
    } catch (err) {
        res.status(500).json(err); // error
    };
});

// add a comment to a post
// TODO: add "authorizeCheck" middleware once sessions are started
router.post('/:id', async (req,res) => {
    try {
        const newComment = await {
            content: req.body.content, // comment from body (value field in HTML)
            user_id: 1, // TODO: uncomment when auth working-> req.session.user_id, // current user id from session
            post_id: req.params.id, // the post id being commented on
        };
        
        const addComment = Comment.create(newComment); // add to database under the comment model

        res.status(200).json(newComment); // status ok
    } catch (err) {
        res.status(400).json(err); // error
    };
});

// Edit comment\
// TODO: add "authorizeCheck" middleware once sessions are started
router.put('/:id', async (req,res) => {
    try {
        const thisComment = await Comment.findByPk(req.params.id)
        const simpleComment = thisComment.get({ plain: true }); // target comment
        /* if (simpleComment.user_id !== req.session.user_id) { // ownership check. Testing negative case
            throw new Error('the user is attempting to edit a comment that isn\'t theirs'); // error
        } else { */ // TODO: un-comment this if else statement with auth is working
            Comment.update({
                content: req.body.content
            }, { // use the request body for content
                where: {
                    id: req.params.id, // where the URL path identifies this comment
                }
            });
            res.status(200).json(req.body); // status ok
        /*};*/ // TODO: un-comment out if else statement with auth is working
    } catch (err) {
        res.status(500).json(err); // error
    };
});

// Delete comment
// TODO: add "authorizeCheck" middleware once sessions are started
router.delete('/:id', async (req,res) => {
    try {
        const thisComment = await Comment.findByPk(req.params.id);
        const plainComment = thisComment.get({ plain: true }); // target a comment
        /* if (plainComment.user_id !== req.session.user_id) { // make sure this user has rights to it
            throw new Error('the user is attempting to edit a comment that isn\'t theirs');
        } else { */ // TODO: un-comment out if-else statement when the auth is working
            Comment.destroy({ // delete the comment from the DB
                where: {
                    id: req.params.id, // targeting comment in DB
                }
            });
            res.status(200).json('comment deleted'); // status ok
        /*};*/ // TODO: un-comment out if else statement with auth is working
    } catch (err) {
        res.status(500).json(err); // error
    };
})

module.exports= router;