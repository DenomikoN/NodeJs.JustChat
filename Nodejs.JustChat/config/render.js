
var ect = require('ect');

module.exports.apply = function (app, viewsPath) {
     var ectRender = ect({
        watch: true, 
        root: viewsPath, 
        ext : '.ec'
    });

    app.set('views', viewsPath);
    app.set('view engine', 'ec');
    app.engine('ec', ectRender.render);
}