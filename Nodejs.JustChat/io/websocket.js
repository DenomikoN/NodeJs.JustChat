var storage = require('../data/mstorage');

var joinWatcher = {
    watch: {},
    getCounter: function ( chatId, userId){
        var chatWatch = this.watch[chatId];
        if (!chatWatch) {
            chatWatch = this.watch[chatId] = {};
        }

        var chatUserWatch = chatWatch[userId];
        if (!chatUserWatch) {
            chatUserWatch = chatWatch[userId] = {
                counter: 0,
                join: function (socket) {
                    this.counter++;
                    socket.chats = socket.chats || [];
                    socket.chats.push(chatId);

                    return this.counter == 1;
                },
                leave: function (socket) {
                    this.counter--;
                    var i = socket.chats.indexOf(chatId);
                    if (i > 0) {
                        socket.chats = socket.chats.splice(i, 1);
                    }
                    return this.counter == 0;
                }
            };
        }

        return chatUserWatch;
    }
};


module.exports.apply = function (app) {

    app.io.on('connection', function (socket) {
        var session = socket.request.session;
        var user = session.user;

        console.log("Connected");
        
        socket.on('chat_join', function (data) {
            var chatJoin = joinWatcher.getCounter( data.chatId, user.id);
        
            console.log(data);
            socket.join('chat_' + data.chatId);
            if (chatJoin.join(socket)) {
                socket.broadcast.to('chat_' + data.chatId).emit('chat_joined', {
                    userId: user.id
                });
            }
        });
        
        socket.on('chat_leave', function (data) {
            var chatJoin = joinWatcher.getCounter(data.chatId, user.id);
            
            console.log(data);
            socket.leave('chat_' + data.chatId);
           
            if (chatJoin.leave(socket)) {
                socket.broadcast.to('chat_' + data.chatId).emit('chat_leaved', {
                    userId: user.id
                });
            }
        });
        
        socket.on('disconnect', function () {
            var chats = socket.chats || [];
            var chatId;
            while((chatId = chats.pop()) != null){
                var watcher = joinWatcher.getCounter(chatId, user.id);
                if (watcher.leave(socket)) {
                    socket.broadcast.to('chat_' + chatId).emit('chat_leaved', {
                        userId: user.id
                    });
                }
            }
        });

        socket.on('msg', function (data) {
            console.log(data);
            data.login = user.login;
            socket.to('chat_' + data.chatId).emit('msg', data);
        });
    });
};