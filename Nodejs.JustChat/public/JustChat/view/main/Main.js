Ext.define('JustChat.view.main.Main', {
    extend: 'Ext.container.Viewport',
    
    requires: [
        'JustChat.view.main.MainModel',
        'JustChat.view.main.MainController',
        'JustChat.view.chat.Chat'
    ],
    
    layout: 'border',

    controller: 'main',
    viewModel: {
        type: 'main'
    }, 

    items: [{
            region: 'center',
            xtype: 'tabpanel',
            reference:'chatContainer'
        },{
            region: 'north',
            xtype: 'component',
            bind: '<h1>Just Chat [{currentUser.login}]</h1>',
            padding:'0 20'
        }]
});