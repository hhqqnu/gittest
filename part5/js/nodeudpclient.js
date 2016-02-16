var dgram = require('dgram');

var socket = dgram.createSocket('udp4');

socket.bind(function(){
  socket.setBroadcast(true);
});

var message = new Buffer('Hello World');
socket.send(message,0,message.length,1234,'127.0.0.1',function(err,bytes){
  socket.close();
});
