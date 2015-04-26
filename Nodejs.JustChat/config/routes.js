var session = require('express-session');


function loadUser(req, res, next) {
    'use strict';
    req.user = res.locals.user = req.session.user;
    next();
}

module.exports.loadUser = loadUser;

module.exports.apply = function (app) {
    
    var sessionMiddleware = session({
        sessionStore: app.store,
        name: 'justchat_session',
        secret: '111111111111111111',
        rolling: true,
        resave: false,
        saveUninitialized: false
    });
    

    app.store = new session.MemoryStore();
    app.use(sessionMiddleware, loadUser);
    app.io.use(function (socket, next) {
        sessionMiddleware(socket.request, socket.request.res, next);
    });
    
    require('../io/websocket').apply(app);

    app.use('/', require('../controllers/index'));
    app.use('/auth', require('../controllers/auth'));
    app.use('/rest', require('../controllers/rest'));

    
}