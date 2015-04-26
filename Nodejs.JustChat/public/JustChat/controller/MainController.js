Ext.define('JustChat.controller.MainController', {
    extend: 'Ext.app.Controller',
    
    requires: [
        'JustChat.view.login.Login',
        'JustChat.view.main.Main'
    ],
    
    init: function () {
      
    },
    
    onLaunch: function () {
        this.session = new Ext.data.Session({
            autoDestroy: false
        });
        
        this.loginManager = new JustChat.LoginManager({
            session: this.session,
            model: 'User'
        });
        
        this.loginManager.checkLogin({
            scope: this,
            success: 'onCheckLoginSuccess',
            failure: 'onCheckLoginFailure'
        });
                
    },
    
    onCheckLoginSuccess: function (user) {
        this.currentUser = user;
        Ext.getBody().unmask();
        this.showUI();
    },
    onCheckLoginFailure: function () {
        this.showLoginUI();
    },
    
    onLoginRequest: function (loginData) {
        this.loginManager.login({
            scope: this,
            data: loginData,
            success: 'onLoginSuccess',
            failure: 'onLoginFailure'
        });
    },
    
    onLoginSuccess: function (user) {
        this.currentUser = user;
        Ext.getBody().unmask();
        this.login.destroy();
        this.showUI();
    },
    onLoginFailure: function () {
        
    },
    
    
    showLoginUI: function () {
        this.login = new JustChat.view.login.Login({
            session: this.session,
            autoShow: true,
            listeners: {
                scope: this,
                loginRequest: 'onLoginRequest'
            }
        });
    },
    
    showUI: function () {
        this.initWebSocket();
        this.viewport = new JustChat.view.main.Main({
            session: this.session,
            viewModel: {
                data: {
                    currentUser: this.currentUser,
                    socket:this.socket
                }
            }
        });
    },
    
    getSession: function () {
        return this.session;
    },
    
    initWebSocket: function () {
        this.socket = io.connect();
        this.socket.emit('join', 'Hello World from client');
    }
});