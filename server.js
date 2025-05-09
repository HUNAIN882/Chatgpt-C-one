const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files (CSS and JS)
app.use(express.static('public'));

// Handle client connection
io.on('connection', (socket) => {
    console.log('A user connected');
  
    // Respond to client messages
    socket.on('userMessage', (msg) => {
        console.log('User: ' + msg);
        let botReply = getBotReply(msg);
        socket.emit('botMessage', botReply);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start server
server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

// Simple function to simulate bot replies
function getBotReply(message) {
    if (message.toLowerCase().includes("hello")) {
 
    } else if (lower.includes("what is the difference between let var and const")) {
      reply = "🤖 Bot: var is function-scoped, let and const are block-scoped. const cannot be reassigned.";
    } else if (lower.includes("what is hoisting")) {
      reply = "🤖 Bot: Hoisting moves variable and function declarations to the top of their scope.";
    } else if (lower.includes("what is the use of this keyword")) {
      reply = "🤖 Bot: this refers to the object executing the current function.";
    } else if (lower.includes("what is a prototype")) {
      reply = "🤖 Bot: A prototype is an object from which other objects inherit properties.";
    } else if (lower.includes("difference between == and ===")) {
      reply = "🤖 Bot: == checks value, === checks value and type.";
    } else if (lower.includes("what is event bubbling")) {
      reply = "🤖 Bot: Event bubbling means the event propagates from the child to the parent.";
    } else if (lower.includes("what is event delegation")) {
      reply = "🤖 Bot: Event delegation handles events at a parent level.";
    } else if (lower.includes("what is the dom")) {
      reply = "🤖 Bot: DOM is the Document Object Model representing HTML structure.";
    } else if (lower.includes("what is the bom")) {
      reply = "🤖 Bot: BOM is the Browser Object Model for interacting with the browser.";
    } else if (lower.includes("what is a higher order function")) {
      reply = "🤖 Bot: A higher-order function takes or returns another function.";
    } else if (lower.includes("what is currying")) {
      reply = "🤖 Bot: Currying breaks a function into a series of functions with one argument each.";
    } else if (lower.includes("what is promise chaining")) {
      reply = "🤖 Bot: Promise chaining is linking multiple .then calls in a sequence.";
    } else if (lower.includes("what is bind in javascript")) {
      reply = "🤖 Bot: bind() sets the value of this for a function.";
    } else if (lower.includes("difference between slice and splice")) {
      reply = "🤖 Bot: slice returns a portion; splice modifies the array.";
    } else if (lower.includes("difference between map and foreach")) {
      reply = "🤖 Bot: map returns a new array, forEach does not.";
    } else if (lower.includes("what is json stringify")) {
      reply = "🤖 Bot: JSON.stringify() converts an object to a JSON string.";
    } else if (lower.includes("what is json parse")) {
      reply = "🤖 Bot: JSON.parse() converts a JSON string to a JavaScript object.";
    } else if (lower.includes("what is nan")) {
      reply = "🤖 Bot: NaN means Not a Number.";
    } else if (lower.includes("difference between null and undefined")) {
      reply = "🤖 Bot: null is an assigned value; undefined means a variable has no value.";
    }
    
}
