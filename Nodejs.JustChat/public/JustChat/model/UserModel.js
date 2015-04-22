Ext.define('JustChat.model.UserModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'login', type: 'string' }
    ],
    manyToMany: 'JustChat.model.ChatModel',

    proxy: {
        type: 'rest',
        url : '/rest/user',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});