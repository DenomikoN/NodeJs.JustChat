Ext.define('JustChat.view.users.UsersModel', {
    extend: 'Ext.app.ViewModel',
    
    alias: 'viewmodel.users',
    
    data: {
        channels: [{
                name : "Home",
                isDefault: true
            }, {
                name : "Test",
                isDefault: false
            }]
    }

});