import React from "react";
import styles from "./Entry.module.css";
import { Button as MuiButton } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../Button";
import { signInGoogle } from "../../firebase";
import { EntrySwitch } from "../EntrySwitch";

export const Entry = () => {
  const history = useHistory();
  const goToLogin = () => history.push("/login");
  const goToReg = () => history.push("/register");
  return (
    <Router>
      <header className={styles.entry_header}>
        <MuiButton>
          <Link to="/login">Login with email</Link>
        </MuiButton>
        <MuiButton>
          <Link to="/register">Register</Link>
        </MuiButton>
        <Button onClick={signInGoogle} children="Login using Google" />
      </header>
      <EntrySwitch goToLogin={goToLogin} goToReg={goToReg} />
    </Router>
  );
};
