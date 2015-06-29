var Server = require("socket.io");

var io = new Server(7070);

io.on("connection", function(socket) {
});
