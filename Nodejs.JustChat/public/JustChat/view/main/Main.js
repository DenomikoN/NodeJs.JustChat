Ext.define('JustChat.view.main.Main', {
    extend: 'Ext.container.Viewport',
    
    requires: [
   //     'JustChat.view.users.Users',
 //       'JustChat.view.main.MainController'
    ],
    
    layout: 'border',

   // controller: 'main',

    items: [{
            region: 'center',
            xtype: 'tabpanel',
            id: 'chatContainer'
        },{
            region: 'north',
            xtype: 'container',
            html:"<h1>Just Chat</h1>",
            padding:'0 20'
        }]
});