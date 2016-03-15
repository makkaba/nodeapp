var express = require('express')
	, http = require('http')
	, app = express()
	, server = http.createServer(app);


app.get('/', function (req, res) {

	res.send('this is root page');
});

app.get('/haha', function (res, res) {
	res.send('this is route haha page');
});

server.listen(80, function() {
	console.log('express server listen on ' + server.address().port);
});

