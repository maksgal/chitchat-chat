import { Button as MuiButton } from "@material-ui/core";
export const Button = ({ onClick = null, children = null, type = null }) => {
  return (
    <MuiButton type={type} onClick={onClick}>
      {children}
    </MuiButton>
  );
};
