var http = require("http");

console.log("Start server");
http.createServer(function(req,res){
	res.end("<b> Hello world </b>");
}).listen(4242);