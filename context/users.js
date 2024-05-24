import React, { createContext, useState } from "react";

export const LoggedUserContext = createContext({});

const LoggedUserProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState();
  const defineLoggedUser = (user) => {
    setLoggedUser(user);
  };
  return (
    <LoggedUserContext.Provider value={{ loggedUser, defineLoggedUser }}>
      {children}
    </LoggedUserContext.Provider>
  );
};

export default LoggedUserProvider;
