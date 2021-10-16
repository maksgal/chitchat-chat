import { Switch, Route } from "react-router-dom";
import { createUserWithEmail, signInWithEmail } from "../firebase";
import { EmailForm } from "./EmailForm/EmailForm";

export const EntrySwitch = () => {
  const signInHandler = (email, password, setError) =>
    signInWithEmail(email, password, setError);
  const registerHandler = (email, password, setError) =>
    createUserWithEmail(email, password, setError);

  return (
    <div className="entry_main">
      <Switch>
        <Route path="/login">
          <EmailForm sendCreds={signInHandler} buttonText="Sign in" />
        </Route>
        <Route path="/register">
          <EmailForm sendCreds={registerHandler} buttonText="Register" />
        </Route>
      </Switch>
    </div>
  );
};
