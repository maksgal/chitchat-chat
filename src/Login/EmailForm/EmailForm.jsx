import styles from "./EmailForm.module.css";
import { useState } from "react";
import { Button } from "../../Button";
import { Input } from "../../Input";

export const EmailForm = ({ sendCreds, buttonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const sendCredsHandler = (e) => {
    e.preventDefault();
    sendCreds(email, password, setError);
  };

  return (
    <form className={styles.email_form}>
      <Input
        className={styles.input}
        value={email}
        setValue={setEmail}
        placeholder="E-mail"
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Password"
      />
      <p>{error}</p>
      <Button type="submit" onClick={sendCredsHandler} children={buttonText} />
    </form>
  );
};
