const sessions = require('sessions'); // sessions is mentioned in the app so its hard to imagine I don't need to import it here

const authorizeCheck = () => {
    if(!req.session.loggedIn) {
        res.redirect('./account/login')
    } else {
        next();
    };
};

module.exports = authorizeCheck;