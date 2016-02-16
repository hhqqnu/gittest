var dgram = require('dgram');
var serverSocket = dgram.createSocket('udp4');

serverSocket.on('error',function (err) {
  console.log('server error:'+err.stack);
});

serverSocket.on('message',function(msg,info){
  console.log('server got '+msg +' from '+info.address+':'+info.port);
});

serverSocket.on('listening',function(){
  var mAddress=serverSocket.address;
  console.log('server is listening');
});

serverSocket.bind(1234);
