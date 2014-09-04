var http = require("http");
var url = require("url");

function start(route, handle) {
	var port = Number(process.env.PORT || 12349);

	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		var postData = url.parse(request.url, true).query;

		console.log("Request for "+pathname+" recieved");
		request.setEncoding("utf8");

		route(handle, pathname, response, request, postData);
	}

	http.createServer(onRequest).listen(port);
	console.log("Server has started.");
}

exports.start = start;