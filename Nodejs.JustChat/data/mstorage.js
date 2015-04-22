var idProvider = function () {
    var startId = 1;
    return {
        id: function () {
            return startId++;
        }
    };
};
Array.prototype.firstOrDefault = function (pred, def){
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            var item = this[i];
            if (pred(item)) {
                return item;
            }
        }
    }
    return def || null; 
}


var me = {
    users: [],
    userId: new idProvider(),
    chats: [
        {
            id:0,
            title: "Home",
            isPrivate: false,
            isDefault: true,
            users: []
        }
    ],
    chatId: new idProvider()
};



me.findUserById = function (id) {
    return me.users.firstOrDefault(function (user) {
        return user.id === id;
    });
};
me.findUserByLogin = function (login) {
    return me.users.firstOrDefault(function (user) {
        return user.login === login;
    });
};
me.isUserExists = function (login) {
    
    me.users.forEach(function (user) {
        if (user.login === login) {
            return true;
        }
    });
    return false;
};
me.registerUser = function (login) {
    if (me.isUserExists(login)) {
        return null;
    }
    
    var newUser = {
        id: me.userId.id(),
        login: login,
        registrationDate: Date.now(),
        chats: []
    };
    
    me.users.push(newUser);
    me.getDefaultChats().forEach(function (chat) {
        newUser.chats.push(chat);
        chat.users.push(newUser);
    });
    
    return newUser;
}

me.findChatById = function (id) {
    me.chats.forEach(function (chat) {
        if (chat.id === id) return chat;
    })
    return null;
};
me.getDefaultChats = function () {
    return me.chats.filter(function (chat) { 
        return chat.isDefault;
    })
};
me.getUserChats = function (userId) {
    var user = me.findUserById(userId);
    if (!!user) {
        return user.chats;
    }
    return null;
}

module.exports = me;
