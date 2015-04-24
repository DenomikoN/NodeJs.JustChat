Ext.define('JustChat.controller.MainController', {
    extend: 'Ext.app.Controller',
   

    stores: [
        "Chats"
    ],
    views: [
        'main.Main'
    ],
    

    
    init: function () {
        this.initializeChats();

        this.control({

        });

    },


    initializeChats: function () {
        var chatsStore = this.getChatsStore();

        chatsStore.on('add', this.addChats.bind(this));
        chatsStore.on('load', this.addChats.bind(this));
        chatsStore.on('remove', this.removeChats.bind(this));

    },
    addChats: function (chatsStore, chats) {
        var mainView = this.getView('main.Main');
        
        debugger;
    },
    removeChats: function (chatsStore, chats) {
        debugger;
    }
});