var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/home"] = requestHandlers.home;
handle["/timeline"] = requestHandlers.timeline;
handle["/news"] = requestHandlers.getNews;

server.start(router.route, handle);