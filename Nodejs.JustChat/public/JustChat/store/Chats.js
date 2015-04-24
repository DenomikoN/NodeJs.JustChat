Ext.define('JustChat.store.Chats', {
    extend: 'Ext.data.Store',
    storeId: 'chatsStore',

    model: 'JustChat.model.ChatModel',
    autoLoad: true
});