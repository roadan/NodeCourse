var net = require('net');

var clients=[];

var server= net.createServer(function(socket){

    socket.write('hello');

    socket.name=socket.remoteAddress + ":" + socket.remotePort;
    clients.push(socket);

    socket.on("data",function(data){

        clients.forEach(function(client){
            if(client!==socket){
                console.log(data.toString());
                client.write(data);
            };
        })  
    });

});

server.listen(3003);