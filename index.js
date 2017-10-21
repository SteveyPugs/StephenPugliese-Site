var server_config = require("./config").config;
var express = require("express");
var app = express();
app.set("view engine", "pug");
app.use("/static", express.static("node_modules"));
app.use("/static", express.static("custom"));
app.get("/", function(req, res){
	res.render("index");
});
app.listen(server_config.port);