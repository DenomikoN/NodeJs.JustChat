Ext.define('JustChat.view.login.Login', {
    extend: 'Ext.window.Window',
    
    requires: [
        'JustChat.view.login.LoginController',
        'JustChat.view.login.LoginModel'
    ],
    
    viewModel: 'login',
    
    controller: 'login',
    bodyPadding: 10,
    title: 'Login - JustChat',
    closable: false,
    modal:true,
    
    items: {
        xtype: 'form',
        reference: 'form',
        border:false,
        items: [{
            xtype: 'textfield',
            name: 'username',
            bind: '{username}',
            fieldLabel: 'Username',
            allowBlank: false,
            enableKeyEvents: true,
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }]
    },

    buttons: [{
        text: 'Login',
        listeners: {
            click: 'onLoginClick'
        }
    }]
});
