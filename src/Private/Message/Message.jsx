import { Avatar, Card, Typography } from "@material-ui/core";
import React from "react";
import styles from "./Message.module.css";

export const Message = ({ message }) => {
  return (
    <li>
      <Card className={styles.message}>
        <div className={styles.username_and_text}>
          <div className={styles.header}>
            <Typography variant="overline">{message.userName}</Typography>
          </div>
          <p className={styles.message_text}>{message.text}</p>
        </div>
        <div>
          <Avatar src={message.avatar} alt="profile" />
        </div>
      </Card>
    </li>
  );
};
