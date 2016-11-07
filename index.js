var http = require('http');

http.createServer( function(request, response){
	response.end("my server worked");
}).listen(process.env.port || 8000);