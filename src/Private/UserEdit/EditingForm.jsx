import styles from "./Edit.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Button";
import { editProfile } from "../../firebase";
import { Input } from "../../Input";
import { ImageUploader } from "./ImageUploader";

export const EditingForm = ({ user }) => {
  const [name, setName] = useState(user && user.displayName);
  const [avatarURL, setAvatarURL] = useState(user && user.photoURL);
  const userUpdateHandler = async (e) => {
    e.preventDefault();
    await editProfile(name, avatarURL);
  };
  return (
    <form className={styles.form}>
      <div className={styles.name_input}>
        <Input value={name} setValue={setName} />
      </div>
      <ImageUploader avatarURL={avatarURL} setAvatarURL={setAvatarURL} />
      <Button type="submit" children="Save!" onClick={userUpdateHandler} />
      <Button children={<Link to="/chat">Back</Link>} />
    </form>
  );
};
