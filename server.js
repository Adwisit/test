﻿var express = require('express');
var app = express();
var port = process.env.port || 1337

app.get('/', function (req, res) {
    res.send('<h2>Hello World!</h2>');
});

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
