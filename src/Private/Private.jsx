import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { useUser } from "../Context/UserContext";
import { Chat } from "./Chat";
import { Edit } from "./UserEdit/Edit";

export const Private = () => {
  const { user } = useUser();
  return (
    <Router>
      <Switch>
        <Route path="/chat">
          <Chat user={user} />
        </Route>
        <Route path="/edit">
          <Edit />
        </Route>
      </Switch>
    </Router>
  );
};
