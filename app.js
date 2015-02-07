/**
 * Created by pilagod on 2/1/15.
 */


var express = require('express');
var app = express();
var server = require('http').createServer(app);

server.listen(3000, function(){
    console.log("listening on *:3000");
});

app.use(express.static(__dirname));

app.get('/', function(req, res){
    res.sendFile('index.html', {"root": __dirname});
});

app.get('/index_temp', function(req, res){
    res.sendFile('index_temp.html', {"root": __dirname});
});