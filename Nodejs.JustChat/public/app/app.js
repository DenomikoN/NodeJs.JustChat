Ext.application({
    name: 'JustChat',
    
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [{
                    region: 'north',
                    html: '<h1 class="x-panel-header">JustChat</h1>',
                    border: false,
                    margin: '0 0 5 0'
                }, {
                    region: 'south',
                    collapsible: false,
                    split: false,
                    height: 50
                }, {
                    region: 'east',
                    title: 'Users',
                    collapsible: true,
                    split: true,
                    width: 150,
                    maxWidth: 250,
                    minWidth: 100
                }, {
                    region: 'center',
                    xtype: 'tabpanel',  
                    items: [{
                        title: 'Home',
                        html: 'Home',
                        itemId: 'home'
                    }, {
                        title: 'Users',
                        html: 'Users',
                        itemId: 'users'
                    }, {
                        title: 'Tickets',
                        html: 'Tickets',
                        itemId: 'tickets'
                    }]
                }]
        });
    }
});