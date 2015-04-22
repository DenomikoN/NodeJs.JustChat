
var session = require('express-session');

function loadUser(req, res, next) {
    'use strict';
    req.user = res.locals.user = req.session.user;
    next();
}

module.exports.loadUser = loadUser;

module.exports.apply = function (app) {
    app.use(session({
        name: 'justchat_session',
        secret: '111111111111111111',
        rolling: true,
        resave: false,
        saveUninitialized:false
    }), loadUser);
    
    

    app.use('/', require('../controllers/index'));
    app.use('/chat', require('../controllers/chat'));
    app.use('/auth', require('../controllers/auth'));
    app.use('/rest', require('../controllers/rest'));
}