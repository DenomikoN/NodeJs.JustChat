'use strict';
var express = require('express');
var storage = require('../data/mstorage');
var router = express.Router();

router.route('/user')
.get(function(req, res){
    res.json({
        success : true,
        total : 3,
        data : [{
                id : 1,
                login : 'Test1'
            }, {
                id : 2,
                login : 'Test2'
            }, {
                id : 3,
                login : 'Test3'
            }]

    });

}).post(function(req, res){
    res.json([{
            2 : 3
        }]);

});

router.route('/user/:user_id')
.get(function(req, res){
    res.json([{
            2 : 3
        }]);

}).put(function(req, res){
    res.json([{
            2 : 3
        }]);

}).delete(function(req, res){
    res.json([{
            2 : 3
        }]);
});

router.route('/chat')
.get(function(req, res){
    var user = storage.findUserById(req.user.id);
    res.jsonWithReplacer(user.chats, 'ignoreArraysByKeys', ['users']);
});

router.route('/chat/:chat_id')
.get(function(req, res){
    res.json({
        success: true,
        total: 1,
        data: [{
                id : 0,
                title : "Home",
                isPrivate : false,
                isDefault : true
            }]
    });

});

module.exports = router;