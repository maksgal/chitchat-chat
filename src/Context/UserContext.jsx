import AVATAR_DEF from "../img/avatar.png";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { auth, getCurrentUser } from "../firebase";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const currentUser = getCurrentUser();
  useEffect(() => {
    const onUserChange = auth.onAuthStateChanged((user) => {
      if (user) {
        if (!user.displayName) user.displayName = "Anonimous user";
        if (!user.photoURL) user.photoURL = AVATAR_DEF;
        setUser(user);
      } else {
      }
      if (loading) {
        setLoading(false);
      }
      console.log(currentUser);
    });
    return onUserChange;
  }, [currentUser, loading]);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export function useUser() {
  const value = useContext(userContext);
  return value;
}
