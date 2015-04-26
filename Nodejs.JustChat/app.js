var express = require('express');
var sio = require('socket.io');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var app = express();
app.io = sio();

require('./config/render').apply(app, path.join(__dirname, 'views'));

app.use(require('morgan')('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./core/appExtensions').apply(app);
require('./config/routes').apply(app);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

require('./config/errors').apply(app);


module.exports = app;
