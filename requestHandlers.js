var timeliner = require("./timeliner");

var querystring = require("querystring"),
	fs = require("fs"),
	formidable = require("formidable");

function home(response, postData, request) {
	readJSONFile("./home.json", function (err, json) {
		if(err) { throw err; }
		response.writeHead(200, {"Content-Type": "application/json"});
		response.write(JSON.stringify(json));
		response.end();
	});
	
}

function timeline(response, postData, request) {
	readJSONFile("./"+postData.t+".json", function (err, json) {
		if(err) { 
			response.writeHead(404, {"Content-Type": "application/json"});
			response.write("file not found");
			response.end();
		} else {
			response.writeHead(200, {"Content-Type": "application/json"});
			response.write(JSON.stringify(json));
			response.end();
		}
	});
	//response.writeHead(200, {"Content-Type": "text/plain"});
	//response.write(timeliner.getTimeline(postData.t));
	//response.end();
}

function getNews(response, postData, request) {
	console.log(postData);
	//response.writeHead(200, {"Content-Type": "text/plain"});
	//response.write(timeliner.getTimeline(postData.t));
	//response.end();
}

function readJSONFile(filename, callback) {
	require("fs").readFile(filename, function (err, data) {
    	if(err) {
    		callback(err);
    		return;
    	}
    	try {
    		callback(null, JSON.parse(data));
    	} catch(exception) {
    		callback(exception);
    	}
	});
}

exports.home = home;
exports.timeline = timeline;
exports.getNews = getNews;