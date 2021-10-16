import styles from "./Chat.module.css";
import { useEffect } from "react";
import { getMessagesFromDBOnStart, updateMessagesOnChange } from "../firebase";
import { ChatInput } from "./ChatInput";
import { useMessages } from "../Context/MessageContext";
import { Messages } from "./Messages";
import { ChatHeader } from "./ChatHeader";
import { Typography } from "@material-ui/core";

export const Chat = ({ user = null }) => {
  const { messages, setMessages } = useMessages();

  useEffect(() => {
    const setMessagesLocally = async (getArr) => {
      const messagesArr = await getArr();
      await setMessages(messagesArr);
    };
    setMessagesLocally(getMessagesFromDBOnStart);
  }, [setMessages]);

  useEffect(() => {
    updateMessagesOnChange(setMessages);
  }, [setMessages]);

  if (messages.length === 0 || !user) {
    return <Typography variant="h5">Logging in...</Typography>;
  }
  return (
    <div className={styles.chat}>
      <ChatHeader />
      <Messages />
      <ChatInput />
    </div>
  );
};
