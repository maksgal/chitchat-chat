import { createContext, useContext, useState } from "react";

export const messageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  return (
    <messageContext.Provider value={{ messages, setMessages }}>
      {children}
    </messageContext.Provider>
  );
};

export function useMessages() {
  const value = useContext(messageContext);
  return value;
}
