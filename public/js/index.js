const socket = io.connect();

socket.on('message', (data) => {
    message = data;
    createMessage(message)
})

const createMessage = (message) => {
    const ul = document.getElementById('messages');
    const li = document.createElement('li');
    li.innerHTML = `<strong>${message.author}</strong>: ${message.message}`
    ul.appendChild(li);
}

const buttonSend = document.getElementById('send');
const messageInput = document.getElementById('message');
const authorInput = document.getElementById('author');

messageInput.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') {
        sendMessage(event)
    }
})

buttonSend.addEventListener('click', sendMessage)

function sendMessage(event) {
    socket.emit('message', {
        author: authorInput.value,
        message: messageInput.value
    });
    messageInput.value = '';
}