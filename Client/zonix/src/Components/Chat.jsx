/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../App.css";

const Chat = ({ socket, username, room }) => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (socket && message.trim() !== "") {
      const messageData = {
        room,
        sender: username,
        message,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("sendMessage", messageData);
    }
  };

  console.log(message);

  useEffect(() => {
    socket.on("recieveMessage", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live chat</p>
      </div>
      <div className="chat-body">
        {messageList?.map((msg) => (
          <h1>{msg.message}</h1>
        ))}
      </div>
      <div className="chat-footer">
        <input
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          type="text"
          placeholder="Type your message"
          name="message"
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
};

export default Chat;
