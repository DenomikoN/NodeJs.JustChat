Ext.define('JustChat.Application', {
    extend: 'Ext.app.Application',
    
    appFolder: 'JustChat',
    name: 'JustChat',

    autoCreateViewport: 'JustChat.view.main.Main',
    

    stores: [
        // TODO: add global/shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
    }
});