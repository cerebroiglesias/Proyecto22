const socket = io.connect();
let messages = [];

const buttonSend = document.getElementById('send');
const messageInput = document.getElementById('message');
const authorInput = document.getElementById('author');
const ul = document.getElementById('messages');

socket.on('messages', (data) => {
    var receivedMessages = data;
    createMessages(receivedMessages)
})

const createMessages = (receivedMessages) => {
    for(var i = messages.length; i < receivedMessages.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `<strong>${receivedMessages[i].author}</strong>: ${receivedMessages[i].message}`
        ul.appendChild(li);
    }
    messages = receivedMessages
}

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