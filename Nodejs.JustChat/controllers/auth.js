var express = require('express');
var router = express.Router();

router.post('/login', function (req, res) {
   'use strict';
    var username = req.body.username;
    console.log('Register: ' + username);
    var user = {
        username: username,
        loginTime: new Date()
    };

    req.session.user = user;
    res.locals.user = user;
    res.redirect('/');

});

router.post('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/chat');
});


function authorized(req, res, next) {
    if (!req.session.user) {
        var error = new Error("Unauthorized access");
        error.status = 403;
        next(error);
    } else {
        next();
    }
}


module.exports = router;
module.exports.authorized = authorized;