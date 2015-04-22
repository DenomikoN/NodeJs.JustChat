Ext.define('JustChat.model.ChatModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'title', type: 'string' },
        { name: 'isPrivate', type: 'boolean', defaultValue: false },
        { name: 'isDefault', type: 'boolean', defaultValue: false },
        { name: 'ownerId', reference: 'JustChat.model.UserModel' },
    ],
    manyToMany: 'JustChat.model.UserModel',
    proxy: {
        type: 'rest',
        url : '/rest/chat',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});