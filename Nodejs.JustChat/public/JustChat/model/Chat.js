Ext.define('JustChat.model.Chat', {
    extend: 'JustChat.model.Base',
    fields: [
        { name: 'title', type: 'string' },
        { name: 'isPrivate', type: 'boolean', defaultValue: false },
        { name: 'isDefault', type: 'boolean', defaultValue: false },
        { name: 'ownerId', reference: 'User' },
    ],
    manyToMany: 'User',
    proxy: {
        type: 'rest',
        url : '/rest/chat',
        appendId: true,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});