import { Input as MuiInput } from "@material-ui/core";
export const Input = ({
  value = null,
  setValue = null,
  type = "",
  placeholder = "",
  autoFocus = false,
  fullWidth = false,
}) => {
  const inputHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <MuiInput
      type={type}
      value={value}
      onChange={inputHandler}
      placeholder={placeholder}
      autoFocus={autoFocus}
      fullWidth={fullWidth}
    />
  );
};
