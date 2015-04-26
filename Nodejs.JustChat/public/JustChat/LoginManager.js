Ext.define('JustChat.LoginManager', {
    config: {
        model: null,
        session: null
    },
    
    constructor: function (config) {
        this.initConfig(config);
    },
    
    applyModel: function (model) {
        return model && Ext.data.schema.Schema.lookupEntity(model);
    },
    
    checkLogin: function (options) {
        Ext.Ajax.request({
            url: 'auth/current',
            method: 'POST',
            scope: this,
            callback: this.onCheckLoginReturn,
            original: options
        });
    },
    onCheckLoginReturn: function (options, success, response) {
        options = options.original;
        var session = this.getSession(),
            resultSet;
        
        if (success) {
            resultSet = this.getModel().getProxy().getReader().read(response, {
                recordCreator: session ? session.recordCreator : null
            });
            
            if (resultSet.getSuccess()) {
                Ext.callback(options.success, options.scope, [resultSet.getRecords()[0]]);
                return;
            }
        }
        
        Ext.callback(options.failure, options.scope, [response, resultSet]);
    },
    
    login: function (options) {
        Ext.Ajax.request({
            url: 'auth/login',
            method: 'POST',
            params: options.data,
            scope: this,
            callback: this.onLoginReturn,
            original: options
        });
    },
    onLoginReturn: function (options, success, response) {
        debugger;
        options = options.original;
        var session = this.getSession(),
            resultSet;
        
        if (success) {
            resultSet = this.getModel().getProxy().getReader().read(response, {
                recordCreator: session ? session.recordCreator : null
            });
            
            if (resultSet.getSuccess()) {
                Ext.callback(options.success, options.scope, [resultSet.getRecords()[0]]);
                return;
            }
        }
        
        Ext.callback(options.failure, options.scope, [response, resultSet]);
    },

    logout: function () {
        Ext.Ajax.request({
            url: 'auth/logout',
            method: 'POST',
            scope: this,
            callback: this.onLogoutReturn,
            original: options
        });
    },
    onLogoutReturn: function (options, success, response) {
        options = options.original;
        var session = this.getSession(),
            resultSet;
        
        Ext.callback(options.success, options.scope);
    }

});
