const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const PORT = 3001;

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(
  server,
  (http,
  {
    cors: {
      origin: "http://127.0.0.1:5173",
    },
  })
);

io.on("connection", (socket) => {
  console.log(`${socket.id} Connected`);

  socket.on("joinRoom", (data) => {
    socket.join(data);
    console.log(`user with id ${socket.id} joined room ${data}`);
  });

  socket.on("sendMessage", (data) => {
    console.log(data);
    socket.to(data.room).emit("recieveMessage", data);
  });

  socket.on("disconnect", () => {
    console.log(`Disconnected ${socket.id}`);
  });
});

server.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
