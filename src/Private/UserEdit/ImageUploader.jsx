import styles from "./ImageUploader.module.css";
import { useState } from "react";
import { Button } from "../../Button";
import { useUser } from "../../Context/UserContext";
import { getImageUrl, uploadImage } from "../../storage";
import { Avatar } from "@material-ui/core";

export const ImageUploader = ({ avatarURL, setAvatarURL }) => {
  const { user } = useUser();
  const [file, setFile] = useState(null);
  const fileInputHandler = async (e) => {
    setFile(e.target.files[0]);
  };
  const uploadHandler = async (e) => {
    if (file) {
      const userID = user.uid;
      e.preventDefault();
      setAvatarURL("");
      await uploadImage(file, userID);
      const newURL = await getImageUrl(userID);
      setAvatarURL(newURL);
    }
  };
  return (
    <div className={styles.form}>
      <div className={styles.avatar}>
        {avatarURL ? (
          <Avatar
            src={avatarURL}
            alt="avatar"
            style={{ height: "100px", width: "100px" }}
          />
        ) : (
          <h2>Loading image...</h2>
        )}
      </div>
      <div className={styles.image_input}>
        <input
          onChange={fileInputHandler}
          type="file"
          accept="image/png, image/jpeg"
        />
        <Button children="Upload Image for preview" onClick={uploadHandler} />
      </div>
    </div>
  );
};
