const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const connectDB = require("./config/DB");
const Message = require("./models/messages");

connectDB();

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

  socket.on("sendMessage", async (data) => {
    console.log(data);

    // Save the message to the database
    try {
      const newMessage = new Message({
        sender: data.sender,
        content: data.message || data.file,
      });

      const savedMessage = await newMessage.save();
      console.log("Message saved to the database:", savedMessage);

      // Broadcast the message to others in the room
      // socket.to(data.room).emit("receiveMessage", savedMessage);
      io.to(data.room).emit("receiveMessage", savedMessage);
    } catch (error) {
      console.error("Error saving message to the database:", error);
    }
  });

  // socket.on("mouseCoordinates", (data) => {
  //   socket.broadcast.to(data.room).emit("mouseEvent", data);
  // });

  socket.on("disconnect", () => {
    console.log(`Disconnected ${socket.id}`);
  });
});

server.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
