Ext.define('JustChat.view.chat.Chat', {
    extend: 'Ext.panel.Panel',
    alias:'widget.chatPanel',
    
    requires: [
        'JustChat.view.chat.ChatController',
        'JustChat.view.chat.ChatModel'
    ],

    layout: 'border',
    controller: 'chat',
    viewModel: 'chat',
    
    items: [{
            region: 'center',
            xtype: 'container',
            layout: 'border',
            items: [{
                    region: 'center',
                    xtype: 'box',
                    padding: '5',
                    autoScroll:true,
                    reference:'chatContent'
                }, {
                    region: 'south',     
                    xtype: 'panel',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    padding: '5 0',
                    
                    items: [{
                            xtype: 'textfield',
                            bind: '{message}',
                            enableKeyEvents: true,
                            listeners: {
                                specialKey: 'onSpecialKey'
                            },
                            flex: 1
                        }, {
                            xtype: 'button',
                            text: 'Send',

                            handler:'sendMessage'
                        }]

                }],
            
        }, {
            region: 'east',
            xtype: 'grid',
            width: 200,
            minWidth: 150,
            maxWidth: 300,
            resizable: true,
            collapsible: true,
            title: 'Users',
            bind: {
                store: '{chat.users}'
            },
            columns: [
                { text: 'Login', dataIndex: 'login', flex: 1 }
            ],
            
          /*  tools: [{
                    type: 'refresh',
                    tooltip: 'Refresh',
                    handler: function (event, toolEl, panelHeader) {
                        this.up('grid').getStore().load();
                    }
                }],
           */
        }]
});