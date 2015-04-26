Ext.define('JustChat.model.Base', {
    extend: 'Ext.data.Model',
    
    fields: [{
            name: 'id',
            type: 'int'
        }],
    
    schema: {
        namespace: 'JustChat.model',
        proxy: {
            url: '{prefix}/{entityName:uncapitalize}',
            pageParam: '',
            startParam: '',
            limitParam: ''
        }
    }
});