const router = require('express').Router();
const loggedIn = require('../utils/loggedIn');
const { User } = require('../models');
const res = require('express/lib/response');


router.get('/login', async (req,res) => {
    try {
        res.status(200).render('login'); // this is just a get request to see the login page
    } catch (err) {
        res.status(500).json(err);
    };
});

router.post('/login', async (req,res) => {
    try {
        req.session.save(() => { // remember during this session which user is here
            req.session.user_id = userData.id;
            req.session.logged_in = true; // remember they are logged in
            // TODO: create an inactivity cookie thing
            
            res.json({ user: userData, message: 'login success' });
          });

        res.render('home');
    } catch (err) {
        res.status(500).json(err);
    }
});

// TODO: Log Out
router.post('/logout', async (req,res) => {
    try {
        // TODO: session destroy all the things
    } catch (err) {
        res.status(400).json(err);
    };
});

// TODO: create account post request
router.post('/createAcct', async (req,res) => {
    try {
        // TODO: add user to the database, encrypt password
    } catch (err) {
        res.status(400).json(err);
    };
});

module.exports = router;