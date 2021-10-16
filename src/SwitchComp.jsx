import styles from "./SwitchComp.module.css";
import { Container, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useUser } from "./Context/UserContext";
import { Entry } from "./Login//Entry/Entry";
import { Private } from "./Private/Private";

export const SwitchComp = () => {
  const history = useHistory();
  const { user, loading } = useUser();

  useEffect(() => {
    user ? history.push("/chat") : history.push("/entry");
  }, [history, user]);

  if (loading) return <Typography variant="h5">Logging in...</Typography>;
  return (
    <Container className={styles.container}>
      <Switch>
        <Route path="/entry">
          <Entry />
        </Route>
        <Route path="/chat">
          <Private />
        </Route>
      </Switch>
    </Container>
  );
};
