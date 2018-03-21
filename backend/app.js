var express = require('express');
var socket = require('socket.io');

var app = express();
var server = http.createServer(app);


var io = require('socket.io').listen(server);
server.listen(3000);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});
