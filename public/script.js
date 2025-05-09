const socket = io();
const sendBtn = document.getElementById('send-btn');
const inputField = document.getElementById('input');
const messagesContainer = document.getElementById('messages');

sendBtn.addEventListener('click', function() {
  const messageText = inputField.value.trim();
  if (messageText) {
    addMessage(messageText, 'user');
    inputField.value = '';
    socket.emit('userMessage', messageText); // Send to server
  }
});

socket.on('botMessage', function(botReply) {
  addMessage(botReply, 'bot'); // Display bot's reply
});

function addMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.innerHTML = `<p>${message}</p>`;
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;  // Scroll to bottom
}
