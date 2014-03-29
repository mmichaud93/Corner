var express = require('express');
var app = express();

app.listen(3000);

app.get('/gabbie', function(request, response) {
	response.send({name:"Gabbie",age:21});
});