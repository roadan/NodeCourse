var net = require('net');
var clients = [];

process.clients = clients;

var server = net.createServer(function(socket){

    // Greeting the client
    socket.write('hello');

    socket.name = socket.remoteAddress + ":" + socket.remotePort
    clients.push(socket);
    socket.on('data', function(data){

        clients.forEach(function (client) {
            // Don't want to send it to sender
            if (client !== socket) {
                console.log(data);
                client.write(data);
            }
        });
    })
});

server.listen(3003);