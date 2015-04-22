Ext.define('JustChat.view.users.Users', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.usersList',
    
    requires: [
        'JustChat.view.users.UsersController',
        'JustChat.view.users.UsersModel'
    ],
    
    title: 'Users',

    columns: [
        { text: 'Login', dataIndex: 'login', flex:1 }
    ],
    
    controller: 'users',
    
    tools: [{
            type: 'refresh',
            tooltip: 'Refresh',
            handler: function (event, toolEl, panelHeader) {
                this.up('grid').getStore().load();
            }
        }],
    
    viewModel: {
        type: 'users'
    },
    
    store: 'UsersStore',
    emptyText: 'No users'
});