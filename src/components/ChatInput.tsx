import { useState, useContext, useRef, useEffect } from "react";
import { ErrorContext } from "../context/ErrorContext";
import { useSocket } from "../context/SocketContext";
import { Message } from "../models/Message";
import styles from "./styles/ChatInput.module.css";

interface ChatInputProps {
  chatting: string;
  setMessages: Function;
  id: string;
}

export default function ChatInput({
  chatting,
  setMessages,
  id,
}: ChatInputProps) {
  const socket = useSocket();
  const [input, setInput] = useState<string>("");
  const [error, setError] = useContext(ErrorContext);
  const submitRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatting) {
      setError("Please choose a contact.");
      return;
    }
    if (!input) {
      setError("Please input your message.");
      return;
    }

    socket.emit("emit", { msg: input, receiver_ID: chatting });
    const formatDate: Message = new Message(input, id, chatting, new Date());
    setMessages((prevMessages: Message[]) => [...prevMessages, formatDate]);
    setInput("");
  };

  useEffect(() => {
    if (!socket) return;
    socket.on("newMessage", (data: any) => {
      if (data.sender_ID === chatting) {
        const formatDate: Message = new Message(
          data.chat,
          data.sender_ID,
          data.receiver_ID,
          new Date(data.date)
        );
        setMessages((prevMessages: Message[]) => [...prevMessages, formatDate]);
      }
    });

    return () => {
      socket.off("newMessage");
    };
  }, [socket, chatting, setMessages]);

  return (
    <div className={styles.chatInput}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Type your message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input ref={submitRef} type="submit" value="Send" />
      </form>
    </div>
  );
}
