const path = require('path');
const express = require('express');
const http = require('http');

const { generateMessage, generateLocationMessage } = require('./utils/message');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '/dist/');
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));
app.get(/.*/, function(req, res) {
	res.sendFile(__dirname + '/dist/index.html');
});
io.on('connection', (socket) => {
	socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

	socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

	socket.on('createMessage', (message, callback) => {
		io.emit('newMessage', generateMessage(message.from, message.text));
		if (callback) {
			callback();
		}
	});

	socket.on('createLocationMessage', (coords, callback) => {
		const { latitude, longitude } = coords;
		io.emit('newLocationMessage', generateLocationMessage('Admin', latitude, longitude));
		if (callback) {
			callback();
		}
	});
	socket.on('disconnect', () => console.log('user was disconnected '));
});

server.listen(PORT, () => console.log(`Server is up on port ${PORT}`));
