


Ext.define('JustChat.Application', {
    extend: 'Ext.app.Application',
    
    appFolder: 'JustChat',
    name: 'JustChat',

    controllers: [
        'MainController'
    ],

    stores: [],
    
    models: [
        'User',
        'Chat'
    ],

    launch: function () {
        // TODO - Launch the application
    }
});