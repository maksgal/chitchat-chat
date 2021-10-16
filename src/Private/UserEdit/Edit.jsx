import styles from "./Edit.module.css";
import { Typography } from "@material-ui/core";
import { useUser } from "../../Context/UserContext";
import { EditingForm } from "./EditingForm";

export const Edit = ({ goToChat = null }) => {
  const { user } = useUser();

  return (
    <div className={styles.edit_page}>
      <div className={styles.title}>
        <Typography variant="h4">Edit your profile here</Typography>
      </div>
      <EditingForm user={user} />
    </div>
  );
};
