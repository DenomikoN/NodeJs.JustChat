Ext.define('JustChat.store.Users', {
    extend: 'Ext.data.Store',
    storeId: 'usersStore',

    model: 'JustChat.model.User',
    autoLoad: true
});