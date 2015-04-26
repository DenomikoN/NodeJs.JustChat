'use strict';
var express = require('express');
var router = express.Router();

var storage = require('../data/mstorage');

router.post('/login', function(req, res){
    var username = req.body.username;
    console.log('Register: ' + username);
    var user = storage.registerUser(req.body.username);
    if (!!user) {
        var sessionUser = {
            id : user.id,
            login : user.login
        };
        req.session.user = sessionUser;
        res.locals.user = sessionUser;
        
        res.json({
            sucess: true,
            data: sessionUser
        });
    } else {
        res.json({
            sucess: false
        });
    }
});

router.post('/current', function (req, res) {
    var user = req.session.user;
    if (!!user) {
        res.json({
            success: true,
            data: {
                id : user.id,
                login : user.login
            }
        });
    } else {
        res.json({
            success: false
        });
    }
});

router.post('/logout', function(req, res){
    req.session.destroy();
    res.json(null);
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