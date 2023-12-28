import { useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");
import "./App.css";
import Chat from "./Components/Chat";

function App() {
  const [username, setUserName] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username.length && room) {
      socket.emit("joinRoom", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h1>Join a Chat</h1>
          <input
            type="text"
            name="name"
            placeholder="John..."
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <input
            type="text"
            name="Room ID"
            placeholder="room id..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>join</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
