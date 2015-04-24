var replacers = {
    chat: function (a,b,c) {
        var cache = [];
        return function (key, value) {
            var vType = typeof value;
            if (vType === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    // Circular reference found, discard key
                    
                    if (Array.isArray(value)) {
                        return value.slice();
                    }
                    return;
                }
                // Store value in our collection
                cache.push(value);
            }
            return value;
        };
    },
    ignoreArraysByKeys: function (arrKeys){
        return function (key, value) {
            if (arrKeys.indexOf(key) !== -1) {
                return;
            }
            return value;
        };
    }
};


module.exports.getReplacer = function (replacerName, args) {
    return replacers[replacerName].apply(replacers, args);
};