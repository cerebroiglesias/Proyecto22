
const socket = require('socket.io');

let clients = 0

messages = [];

const socketInit = function(server){
    
    var io = socket(server);
    io.on('connection', (socket) => {
        clients++;
        console.log('¡Alguien se conectó! Cantidad de clientes conectados: ' + clients)
        io.emit('announcement', '¡Alguien se conectó! Cantidad de clientes conectados: ' + clients);
        io.emit('messages', messages);
    
        socket.on('disconnect', () => {
            clients--;
            console.log('¡Alguien se desconectó! Cantidad de clientes conectados: ' + clients)
            socket.emit('announcement', '¡Alguien se desconectó! Cantidad de clientes conectados: ' + clients);
        })
        
        socket.on('message', (data) => {
            messages.push(data);
            io.emit('messages', messages);
        })
    })
}

module.exports = socketInit;