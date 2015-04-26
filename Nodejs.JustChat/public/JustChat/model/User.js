Ext.define('JustChat.model.User', {
    extend: 'JustChat.model.Base',
    fields: [
        { name: 'login', type: 'string' }
    ],
    manyToMany: 'Chat',

    proxy: {
        type: 'rest',
        url : '/rest/user',
        appendId: true,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});