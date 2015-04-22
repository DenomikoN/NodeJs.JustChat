Ext.define('JustChat.view.chat.Chat', {
    extend: 'Ext.panel.Panel',
    alias:'widget.chatPanel',

    layout: 'border',
    
    items: [{
            region: 'center',
            xtype: 'tabpanel'
        }, {
            region: 'east',
            xtype: 'usersList',
            width: 200,
            minWidth: 150,
            maxWidth: 300,
            resizable: true,
            collapsible: true
        }],

    
    initComponent: function () {
        me.callParent(arguments);
    }
});