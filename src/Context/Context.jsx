import { UserProvider } from "./UserContext";
import { MessageProvider } from "./MessageContext";
export const Context = ({ children }) => {
  return (
    <UserProvider>
      <MessageProvider>{children}</MessageProvider>
    </UserProvider>
  );
};
