Ext.define('JustChat.store.Chats', {
    extend: 'Ext.data.Store',
    storeId: 'chatsStore',

    model: 'JustChat.model.Chat',
    autoLoad: true
});