import styles from "./Chat.module.css";
import { useState } from "react";
import { Button } from "../Button";
import { useUser } from "../Context/UserContext";
import { sendMessage } from "../firebase";
import { Input } from "../Input";
export const ChatInput = () => {
  const [newMessage, setNewMessage] = useState("");
  const { user } = useUser();
  const sendButtonHandler = async (e) => {
    e.preventDefault();
    if (newMessage) {
      await sendMessage(user, newMessage);
      setNewMessage("");
    }
  };
  return (
    <form>
      <Input
        autoFocus={true}
        fullWidth={true}
        value={newMessage}
        setValue={setNewMessage}
      />
      <div className={styles.send_button}>
        <Button children="Send" onClick={sendButtonHandler} type="submit" />
      </div>
    </form>
  );
};
