var Hapi = require("hapi");
var req = require("request");
var async = require("async");
var moment = require("moment");
var server = new Hapi.Server();
var server_config = require("./config").config;
var repos = [{
	tag: "AlternateSide.NYC",
	giturl: "alternatesidenyc",
	url: "//www.alternateside.nyc"
},{
	tag: "End Of Line",
	giturl: "stephenpugliese-blog",
	url: "//www.endoflne.com"
}];
server.connection({
	host: server_config.hostname,
	port: server_config.port
});
server.views({
	engines: {
		jade: require("jade")
	},
	path: "./views"
});
server.route([
	{
		method: "GET",
		path: "/",
		config:{
			handler: function(request, reply){
				var object = {
					sites: []
				};
				async.eachSeries(repos, function(site, callback){
					var single_site;
					req.get("https://api.github.com/repos/steveypugs/" + site.giturl + "/commits", {
						"auth":{
							"username": server_config.github_username,
							"password": server_config.github_password
						},
						headers:{
							"User-Agent": "request"
						}
					}, function(error, response, body){
						if(!error && response.statusCode === 200){
							var res = JSON.parse(body);
							single_site = {
								site_name: site.tag,
								commit_date: moment(res[0].commit.author.date).format("MMMM Do YYYY"),
								commit_url: res[0].html_url,
								site_url: site.url
							};
							object.sites.push(single_site);
							callback();
						}
					});
				}, function(err){
					if(err) console.log(err);
					reply.view("index", object);
				});
			}
		}
	},
	{
		method: "*",
		path: "/{path*}",
		handler:{
			directory:{
				path: "./static/",
				listing: false,
				redirectToSlash: true
			}
		}
	}
]);
server.start(function(){
	console.log("Server running at:", server.info.uri);
});