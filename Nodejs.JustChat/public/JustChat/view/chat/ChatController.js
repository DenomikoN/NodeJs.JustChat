Ext.define('JustChat.view.chat.ChatController', {
    extend: 'Ext.app.ViewController',
    
    alias: 'controller.chat',

    init: function () {
        this.connectChatSocket();
    },
    
    onSpecialKey: function(field, e) {
        if (e.getKey() === e.ENTER) {
            this.sendMessage();
        }
    },
    sendMessage: function (){
        var viewModel = this.getViewModel();
        var msg = viewModel.get('message');
        if (!!msg) {
            viewModel.set('message', '');
            viewModel.notify();
            this.transmitMessage(msg);
        }
    },

    transmitMessage: function (msg) {
        var vm = this.getViewModel();
        var socket = vm.get('socket');
        var data = {
            chatId: vm.get('chat').get('id'),
            msg: msg
        };
        this.appendMessage(data);
        socket.emit('msg',data);
    },
    connectChatSocket: function () {
        var me = this;
        var vm = me.getViewModel();
        var socket = vm.get('socket');
        socket.emit('chat_join', {
            chatId: vm.get('chat').get('id')
        });
        
        socket.on('chat_joined', function (data) {
            console.log("chat_joined", data.userId);
            var chatUsers = vm.get('chat').users();
            var rec  = me.getViewModel().getSession().getRecord(JustChat.model.User, data.userId, true);
            chatUsers.add(rec);
        });
        
        socket.on('chat_leaved', function (data) {
            console.log("chat_leaved", data.userId);
            var chatUsers = vm.get('chat').users(),
             user;
            if (!!(user = chatUsers.getById(data.userId))) {
                chatUsers.remove(user);
            }
        });
        

        socket.on('msg', function (data) {
            console.dir(data);
            me.appendMessage(data);
        });

    },

    appendMessage: function (data){
        var container = this.lookupReference('chatContent');
        container.getEl().insertHtml("beforeEnd", "<div><strong>" + Ext.String.htmlEncode( data.login) + " &nbsp;></strong> &nbsp;" + Ext.String.htmlEncode(data.msg) + "</div>");
        container.scrollTo(0, container.getHeight());
    }

});