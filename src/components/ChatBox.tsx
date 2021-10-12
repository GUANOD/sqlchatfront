import { useEffect, useRef } from "react";
import { getMessages } from "../api/APIchat";
import { useSocket } from "../context/SocketContext";
import { ADDRESS } from "../helpers/Address";
import { Message } from "../models/Message";
import styles from "./styles/ChatBox.module.css";

interface ChatBoxProps {
  chatting: string;
  messages: Message[];
  setMessages: Function;
}

interface MessageBubbleProps {
  chat: string;
  date: Date;
  receiver_ID: string;
  chatting: string;
}

export default function ChatBox({
  chatting,
  messages,
  setMessages,
}: ChatBoxProps) {
  const scroll = useRef<HTMLLIElement>(null);
  const socket = useSocket();
  const scrollToBottom = () => {
    scroll.current?.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!chatting) return;
    getMessages(chatting, ADDRESS.getMessages)
      .then((data: any) => {
        let messages: Message[] = data.res.map((message: any) => {
          return new Message(
            message.chat,
            message.sender_ID,
            message.receiver_ID,
            new Date(message.date)
          );
        });
        setMessages(messages);
      })
      .catch((data) => console.log(data));
  }, [chatting, setMessages]);

  return (
    <div className={styles.chatBar}>
      {messages?.length ? (
        <ul>
          {messages.map((message) => {
            return (
              <MessageBubble
                key={Math.random()}
                chatting={chatting}
                chat={message.chat}
                receiver_ID={message.receiver_ID}
                date={message.date}
              />
            );
          })}
          <li ref={scroll}></li>
        </ul>
      ) : (
        <h6>Connect with your friends</h6>
      )}
    </div>
  );
}

export function MessageBubble({
  chat,
  receiver_ID,
  date,
  chatting,
}: MessageBubbleProps) {
  //TODO: ADD MONTH AND DAY
  const time = useRef<HTMLParagraphElement>(null);

  return (
    <li
      className={receiver_ID === chatting ? styles.sent : styles.received}
      onClick={() => {
        time.current?.classList.contains(styles.timeShow)
          ? time.current?.classList.remove(styles.timeShow)
          : time.current?.classList.add(styles.timeShow);
      }}
    >
      <p>{chat}</p>
      <p ref={time} className={styles.time}>
        {date.getHours()}h{date.getMinutes()}
      </p>
    </li>
  );
}
