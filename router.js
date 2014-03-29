function route(handle, pathname, response, request, postData) {
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response, postData, request);
	} else {
		console.log("No request handle found for "+pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not Found");
		response.end();
	}
}

/*
 *	look up Express/Noah browserfy
 *	webstorm ide
 */ 

exports.route = route;