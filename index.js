var Hapi = require('hapi');
var server = Hapi.createServer('localhost', 4567);

var home = {
    handler: function (request) {
        request.reply.view('index', "");
    }
};

server.route([
        {method: 'GET', path: '/',  config: home},  
        {method: '*', path: '/{path*}', handler: {directory: {path: './static/', listing: false, redirectToSlash:true}}}
]);

server.views({
    engines: {
        html: 'handlebars'            
    },
    path: './views'
});

server.start(function(){
        console.log('Sever Started at: ' + server.info.uri);
});