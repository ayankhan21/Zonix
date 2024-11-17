import React from "react";
import styles from "./MainChatList.module.css";

type chatCardTypes = {
  name: string;
  profilePicture: string;
  lastMessageTime: Date;
  lastMessage: string;
};
const ChatCard = ({
  name,
  profilePicture,
  lastMessageTime,
  lastMessage,
}: chatCardTypes) => {
  return (
    <div className={styles.ChatCard}>
      <div>{profilePicture}</div>
      <div>
        {name}
        {lastMessage}
      </div>
      <div>{lastMessageTime.getDay()}</div>
    </div>
  );
};

export default ChatCard;
