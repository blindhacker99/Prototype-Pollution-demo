var express = require('express');
var app  = express();
var _ = require('lodash');
var bodyParser = require('body-parser');


app.use(bodyParser.json({type:'application/*+json'}))
app.get('/', function(req, res){
	res.send("use the post method!");
});

app.post('/', function(req, res) {
	_.merge({}, req.body);
	res.send(req.body);
});



app.listen(3000, function() {
	console.log("Example app listening on port 3000")
});