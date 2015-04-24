var replacerCore = require('./replacer');

module.exports.apply = function (app) {
    app.response.jsonWithReplacer = function (obj, replacerName) {
            
        // settings
        var app = this.app;
        var spaces = app.get('json spaces');
        var replacer = replacerCore.getReplacer(replacerName, Array.prototype.slice.call(arguments, 2));
        var body = JSON.stringify(obj, replacer, spaces);
            
        // content-type
        this.charset = this.charset || 'utf-8';
        this.get('Content-Type') || this.set('Content-Type', 'application/json');
            
        return this.send(body);
    };
}