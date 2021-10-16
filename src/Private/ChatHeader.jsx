import styles from "./Chat.module.css";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Avatar, Typography } from "@material-ui/core";
import { auth } from "../firebase";
import { useUser } from "../Context/UserContext";

export const ChatHeader = () => {
  const { user, setUser } = useUser();
  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (e) {
      console.log(e);
    }
    setUser(null);
  };

  return (
    <div className={styles.header}>
      <Button onClick={signOut} children={"Sign out"} />
      <Button
        children={
          <Link className={styles.link_button} to="/edit">
            {user.displayName === "Anonimous user"
              ? "Add name and profile picture here or stay anonimous"
              : "Edit profile"}
          </Link>
        }
      />
      <div className={styles.user_info}>
        <div className={styles.username}>
          <Typography variant="h6">{user.displayName}</Typography>
        </div>
        <Avatar
          style={{ height: "60px", width: "60px" }}
          src={user.photoURL ? user.photoURL : ""}
          alt="profile"
        />
      </div>
    </div>
  );
};
