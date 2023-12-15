/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ChatInput from "./ChatInput"; // Make sure to import the ChatInput component
import { decryptMessage, encryptMessage } from "../helper";
import "../App.css";

const Chat = ({ socket, username, room }) => {
  const [messageList, setMessageList] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [file, setFile] = useState({});
  const [sender, setSender] = useState("");

  useEffect(() => {
    const handleReceiveMessage = (data) => {
      setMessageList((list) => [...list, data]);
      setSender(data.sender);
    };

    const handleMouseMovement = (data) => {
      setCoordinates(data);
    };

    socket.off("receiveMessage");
    socket.off("mouseEvent");

    socket.on("mouseEvent", handleMouseMovement);

    socket.on("receiveMessage", handleReceiveMessage);

    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
    };
  }, [socket]);

  const sendMessage = (message) => {
    if (socket && message.trim() !== "") {
      const messageData = {
        room,
        sender: username,
        message: encryptMessage(message),
        file,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      socket.emit("sendMessage", messageData);
    }
  };

  const handleMouseMove = (event) => {
    const x = event.clientX; // X coordinate relative to the viewport
    const y = event.clientY; // Y coordinate relative to the viewport

    // Do something with x and y coordinates, e.g., log them
    if (socket) {
      socket.emit("mouseCoordinates", { x, y, room });
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  console.log(coordinates);

  return (
    <div className="chat-window">
      <div
        style={{
          position: "absolute",
          left: `${coordinates.x}px`,
          top: `${coordinates.y}px`,
          height: "20px",
          width: "20px",
          borderRadius: "5px",
          background: "red",
        }}
      />
      <div className="chat-header">
        <p>Live chat {sender === username ? "" : sender}</p>
      </div>
      <div className="chat-body">
        {messageList?.map((msg) => (
          <div key={msg._id}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  color: msg.sender === username ? "red" : "blue",
                  float: msg.sender === username ? "right" : "left",
                  textAlign: "left",
                  maxWidth: "300px",
                }}
              >
                {decryptMessage(msg.content)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <ChatInput onSendMessage={sendMessage} setFile={setFile} />
    </div>
  );
};

export default Chat;
