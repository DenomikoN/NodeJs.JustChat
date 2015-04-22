Ext.define('JustChat.store.UsersStore', {
    extend: 'Ext.data.Store',
    storeId: 'usersStore',

    model: 'JustChat.model.UserModel',
    autoLoad: true
});