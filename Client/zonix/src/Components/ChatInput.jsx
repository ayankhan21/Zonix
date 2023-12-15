/* eslint-disable react/prop-types */
import { useState } from "react";
import EmojiPicker from "emoji-picker-react"; // You can choose an emoji picker library

const ChatInput = ({ onSendMessage, setFile }) => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleAttachImage = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleEmojiClick = (emojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
      <input type="file" accept="image/*" onChange={handleAttachImage} />
      <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😊</button>

      {showEmojiPicker && (
        <EmojiPicker onEmojiClick={handleEmojiClick} disableSkinTonePicker />
      )}
    </div>
  );
};

export default ChatInput;
