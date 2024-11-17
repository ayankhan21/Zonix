import MainChatListComp from "./Components/MainChatList/MainChatListComp";

export default function Home() {
  return (
    <div className="main">
      <div className="chat-container">
        <MainChatListComp />
      </div>
      <div className="main-chat">Main Chat</div>
    </div>
  );
}
