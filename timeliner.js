function getTimeline(t) {
	readJSONFile("./home.json", function (err, json) {
		if(err) { throw err; }
		response.writeHead(200, {"Content-Type": "application/json"});
		response.write(JSON.stringify(json));
		response.end();
	});
	return t;
}

exports.getTimeline = getTimeline;