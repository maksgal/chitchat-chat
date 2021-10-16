import styles from "./Messages.module.css";
import { useEffect, useRef } from "react";
import { useMessages } from "../Context/MessageContext";
import { Message } from "./Message/Message";
export const Messages = () => {
  const messagesEl = useRef();
  const { messages } = useMessages();
  const scrollDown = () => {
    messagesEl.current.scrollTop = messagesEl.current.scrollHeight;
  };

  useEffect(() => {
    scrollDown();
  }, [messages]);

  return (
    <div>
      <ul ref={messagesEl} className={styles.messages}>
        {messages.map((message) => (
          <Message key={message.time} message={message} />
        ))}
      </ul>
      <div className={styles.gradient}></div>
    </div>
  );
};
