import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
import "./db"; // This will automatically connect to PostgreSQL

dotenv.config(); // Load environment variables

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*" },
});

// Middleware
app.use(cors());
app.use(express.json());

// Simple API Route
app.get("/", (req, res) => {
  res.send("Chat App Backend is Running 🚀");
});

// WebSocket Connection
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Start Server
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
