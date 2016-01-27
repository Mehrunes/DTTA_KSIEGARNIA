var express = require('express');
var server = express();

server.use(express.static(__dirname + '/'));

server.listen(9999);
console.log('server listening on 9999');
