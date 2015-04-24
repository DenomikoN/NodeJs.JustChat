


Ext.define('JustChat.Application', {
    extend: 'Ext.app.Application',
    
    appFolder: 'JustChat',
    name: 'JustChat',

    autoCreateViewport: 'JustChat.view.main.Main',
    
    controllers: [
        'MainController'
    ],

    stores: [],
    
    models: [
        'UserModel',
        'ChatModel'
    ],

    launch: function () {
        debugger;
        // TODO - Launch the application
    }
});