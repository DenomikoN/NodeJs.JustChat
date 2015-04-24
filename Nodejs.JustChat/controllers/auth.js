var express = require('express');
var router = express.Router();

var storage = require('../data/mstorage');

router.post('/login', function(req, res){
    'use strict';
    var username = req.body.username;
    console.log('Register: ' + username);
    var user = storage.registerUser(req.body.username);
    var sessionUser = {
        id : user.id,
        login : user.login
    };
    req.session.user = sessionUser;
    res.locals.user = sessionUser;
    res.redirect('/');
});

router.post('/logout', function(req, res){
    req.session.destroy();
    res.redirect('/chat');
});


function authorized(req, res, next){
    if (!req.session.user) {
        var error = new Error('Unauthorized access');
        error.status = 403;
        next(error);
    } else {
        next();
    }

}


module.exports = router;
module.exports.authorized = authorized;