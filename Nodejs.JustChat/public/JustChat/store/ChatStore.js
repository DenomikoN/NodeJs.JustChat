Ext.define('JustChat.store.ChatStore', {
    extend: 'Ext.data.Store',
    storeId: 'chatsStore',

    model: 'JustChat.model.ChatModel',
    autoLoad: true
});