'use strict';
var express = require('express');
var storage = require('../data/mstorage');
var router = express.Router();

router.route('/user')
.get(function (req, res){
    var filter = req.query.filter;
    
    if (!!filter) {
        filter = JSON.parse(filter);
        var chatId = filter[0].value;

        var chat = storage.findChatById(chatId);

        res.jsonWithReplacer({
            success: true,
            data: chat.users
        }, 'ignoreArraysByKeys', ['chats']);
    } else {
        res.json({
            success : false
        });
    }
    
});

router.route('/user/:id')
.get(function (req, res) {
    var user = storage.findUserById(parseInt(req.params.id,10));
    if (!!user) {
        res.json({
            success: true,
            data: {
                id : user.id,
                login : user.login
            }
        });
    } else {
        res.json({ success: false });
    }
});


router.route('/chat')
.get(function(req, res){
    var user = storage.findUserById(req.user.id);
    if (!!user) {
        res.jsonWithReplacer({
            success: true,
            data: user.chats
        }, 'ignoreArraysByKeys', ['users']);
    } else {
        res.json({ success:false });
    }
});

module.exports = router;