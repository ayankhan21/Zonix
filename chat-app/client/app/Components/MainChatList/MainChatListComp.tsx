import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import styles from "./MainChatList.module.css";
import ChatCard from "./ChatCard";

const MainChatListComp = () => {
  const dummyData = [
    {
      id: "ASXISUUU",
      name: "John Doe",
      profilePicture: "",
      lastMessageTime: new Date(),
      lastMessage: "Heyy",
    },
  ];
  return (
    <div className={styles.mainContent}>
      <div className={styles.topBar}>
        <SidebarTrigger />
        <span>Chats</span>
      </div>
      <div className={styles.chatlist}>
        {dummyData?.map((item, index) => (
          <ChatCard
            name={item.name}
            lastMessageTime={item.lastMessageTime}
            profilePicture={item.profilePicture}
            lastMessage={item.lastMessage}
            key={`${item.id}+${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainChatListComp;
