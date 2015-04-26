

Ext.define('JustChat.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    
    requires: [
        'JustChat.LoginManager'
    ],

    loginText: 'Logging in...',

    onSpecialKey: function(field, e) {
        if (e.getKey() === e.ENTER) {
            this.doLogin();
        }
    },
    
    onLoginClick: function() {
        this.doLogin();
    },
    
    doLogin: function() {
        var form = this.lookupReference('form');
        
        if (form.isValid()) {
            Ext.getBody().mask(this.loginText);
            this.fireViewEvent('loginRequest', form.getValues());
        }
    },
  
});
