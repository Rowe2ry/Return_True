const router = require('express').Router();
const loggedIn = require('../utils/loggedIn');
const { User } = require('../models');
const res = require('express/lib/response');


router.get('/login', async (req,res) => {
    try {
        res.render('login'); // this is just a get request to see the login page
    } catch (err) {
        res.status(500).json(err);
    };
});

router.post('/login', async (req,res) => {
    try {
        req.session.save(() => { // remember during this session which user is here
            req.session.user_id = userData.id;
            req.session.logged_in = true; // remember they are logged in
          });
          res.json({ user: userData, message: 'login success' });
        res.redirect('/');
    } catch (err) {
        res.status(500).json(err);
    }
});

// Go to Log Out page (page should load perform the logout post request onload)
router.get('/logout', async (req,res) => {
    try {
        const logout = await res.render('/logout')
    } catch (err) {
        res.status(400).json(err); // error status
    };
});

// Log Out
router.post('/logout', async (req,res) => {
    try {
        if (req.session.logged_in) { // make sure someone trying to log out is logged in first
            req.session.destroy(() => { // delete the session cookies
            res.status(200).end(); // // required in session docs to complete a session destroy
            });
        } else {
            res.status(400).end(); // error status but try to end anyway
        };
    } catch (err) {
        res.status(400).json(err); // error status
    };
});

// Create account post request
router.post('/createAcct', async (req,res) => {
    try {
       if (!req.session.logged_in) {
           const newUser = await User.create ({
               username: req.body.username,
               email: req.body.email,
               password: req.body.password,
           });
           const thisUSer = await User.findAll({
               where: {
                   email: req.body.email
               },
           }).get({ plain:true });

           req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = thisUser.id
            res.status(200).json(dbUserData);
          });

       }
    } catch (err) {
        res.status(400).json(err);
    };
});

module.exports = router;

return true;