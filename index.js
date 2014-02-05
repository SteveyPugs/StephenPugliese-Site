var Hapi = require('hapi');
var requestN = require('request');
var async = require('async');
var moment = require('moment');

var masterConfig = require('./config/config');
var server = new Hapi.Server(masterConfig.config.hostname, masterConfig.config.port);

var index = function(request, reply) {
    pageDate = new Object
    pageDate["title"] = "Home"

    async.parallel([
        function(callbackAltSide){
            requestN({'method': 'GET', 'uri': 'https://api.github.com/repos/steveypugs/alternatesidenyc/commits', headers: {'User-Agent': 'request'}, 'auth': { 'username': masterConfig.config.github_username, 'password': masterConfig.config.github_password } }, function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    var githubResponse = JSON.parse(body)
                    var gitHubObject = new Object
                    gitHubObject["AltSideNYC"] = new Object
                    gitHubObject["AltSideNYC"]["siteName"] = "Alternate Side NYC"
                    gitHubObject["AltSideNYC"]["lastCommitDate"] = moment(githubResponse[0].commit.author.date).format('MMMM Do YYYY');
                    gitHubObject["AltSideNYC"]["lastCommitURL"] = githubResponse[0].html_url
                    callbackAltSide(null, gitHubObject);
                }
            })
        },
        function(callbackAltSideAPI){
            requestN({'method': 'GET', 'uri': 'https://api.github.com/repos/steveypugs/alternatesidenyc-node/commits', headers: {'User-Agent': 'request'},'auth': { 'username': masterConfig.config.github_username, 'password': masterConfig.config.github_password} }, function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    var githubResponse = JSON.parse(body)
                    var gitHubObject = new Object
                    gitHubObject["AltSideNYCAPI"] = new Object
                    gitHubObject["AltSideNYCAPI"]["siteName"] = "Alternate Side NYC API"
                    gitHubObject["AltSideNYCAPI"]["lastCommitDate"] = moment(githubResponse[0].commit.author.date).format('MMMM Do YYYY');
                    gitHubObject["AltSideNYCAPI"]["lastCommitURL"] = githubResponse[0].html_url
                    callbackAltSideAPI(null, gitHubObject);
                }
            })
        },
        function(callbackBlog){
            requestN({'method': 'GET', 'uri': 'https://api.github.com/repos/steveypugs/stephenpugliese-blog/commits', headers: {'User-Agent': 'request'},'auth': { 'username': masterConfig.config.github_username, 'password': masterConfig.config.github_password} }, function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    var githubResponse = JSON.parse(body)
                    var gitHubObject = new Object
                    gitHubObject["Blog"] = new Object
                    gitHubObject["Blog"]["siteName"] = "End Of Line"
                    gitHubObject["Blog"]["lastCommitDate"] = moment(githubResponse[0].commit.author.date).format('MMMM Do YYYY');
                    gitHubObject["Blog"]["lastCommitURL"] = githubResponse[0].html_url
                    callbackBlog(null, gitHubObject);
                }
            })
        }
    ],
    function(err, results){
        pageDate["repos"] = results
        reply.view('index', pageDate)
    });
}


server.route([
        {method: 'GET', path: '/',  config: {handler: index} },  
        {method: '*', path: '/{path*}', handler: {directory: {path: './static/', listing: false, redirectToSlash:true}}}
])

server.views({
    engines: {
        html: 'handlebars'            
    },
    path: './views',
    partialsPath: './views/partials'
})

server.start()


