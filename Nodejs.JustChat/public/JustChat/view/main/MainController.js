Ext.define('JustChat.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    
    alias: 'controller.main',

    initViewModel: function () {
        this.loadChats();
        this.listenSocket();
    },
    loadChats: function () {
        var currentUser = this.getViewModel().getData().currentUser;
        var chats = currentUser.chats();
        
        chats.on('load',this.chatsLoaded,this);
        chats.load();
    },
    chatsLoaded: function (store, records, successful, eOpts) { 
        store.each(this.loadChat, this);
    },
    loadChat: function (chat, idx, count) {
        var chatContainer = this.lookupReference('chatContainer');
        chatContainer.add(new JustChat.view.chat.Chat({
            xtype: 'chatPanel',
            title: chat.get('title'),
            closable: !chat.get('isDefault'),

            session: this.getView().session,
            viewModel: {
                data: {
                    chat: chat
                }
            },
        }));
    },
    listenSocket: function () {
        var socket = this.getViewModel().get('socket');
        debugger;
    }
});