import React, { useState } from "react";
import { SocketProvider } from "../context/SocketContext";
import { Contact } from "../models/Contact";
import { Message } from "../models/Message";
import ChatBox from "./ChatBox";
import ChatInput from "./ChatInput";
import SideBar from "./SideBar";
import styles from "./styles/Chat.module.css";

type Props = {
  id: string;
};

export default function Chat({ id }: Props) {
  const [chatting, setChatting] = useState<string>("");
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <SocketProvider id={id}>
      <div className={styles.chat}>
        <SideBar
          setContacts={setContacts}
          contacts={contacts}
          chatting={chatting}
          setChatting={setChatting}
        />
        <ChatBox
          chatting={chatting}
          messages={messages}
          setMessages={setMessages}
        />
        <ChatInput chatting={chatting} id={id} setMessages={setMessages} />
      </div>
    </SocketProvider>
  );
}
