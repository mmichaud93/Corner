var express = require('express');
var OAuth = require('oauth');
var app = express();

var port = Number(process.env.PORT || 53535);
var consumerKey = "dj0yJmk9TzhKWmN1czJzWkhPJmQ9WVdrOWVXRm9lVEZUTm1zbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1jMw--";
var consumerSecret = "31f54acc5d06727480eb44739106c469cc25eaa0";

app.listen(port);
console.log("Listening on port: "+port);

app.get('/search', function(req, res) {
	var query = req.query.q;
	var count = 10;
	console.log("processing news search request for: "+query);
	// https://yboss.yahooapis.com/ysearch/news?q={keywords}
	var webSearchUrl = 'https://yboss.yahooapis.com/ysearch/news';  
  
	var finalUrl = webSearchUrl + '?q=' + query;
	var oa = new OAuth.OAuth(webSearchUrl, webSearchUrl, consumerKey, consumerSecret, "1.0", null, "HMAC-SHA1");  
  	oa.setClientOptions({ requestTokenHttpMethod: 'GET' });  
  	oa.getProtectedResource(finalUrl, "GET", '','', function(e, data, result) {
	        if (e) {
	        	console.error(e);  
	        	res.send(e);
	        	return;
	        }       
	        res.send(data);
	        console.log((data));     
      });  
});

app.get('/gabbie', function(request, response) {
	response.send({name:"Gabbie",age:21});
});