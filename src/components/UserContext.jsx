import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userType: "guest",
    email: "",
    token: "",
    isAuthenticated: false,
  });

  const isAuthenticated = () => {
    return !!user && !!user.token;
  };

  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
