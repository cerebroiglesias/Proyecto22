const socket = io.connect();

socket.on('message', (data) => {
    message = data;
    createMessage(message)
})

const createMessage = (message) => {
    const ul = document.getElementById('messages');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode('Socket ID: ' + message.socketId + ' -> Mensaje: ' + message.mensaje));
    ul.appendChild(li);
}

const messageInput = document.getElementById('message');

messageInput.addEventListener('keyup', (event) => {
    if(event.keyCode === 13) {
        socket.emit('message', messageInput.value);
    }
})