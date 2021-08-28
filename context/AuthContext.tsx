import React, { useState } from "react";

type TauthContext = {
  isAuth: boolean;
  setAuth: () => void;
};

export const Context = React.createContext<Partial<TauthContext>>({});

const AuthContext: React.FC = ({ children }) => {
  const [isAuth, setAuth] = useState(false);

  const makeAuthentication = () => {
    setAuth(true);
  };

  return (
    <Context.Provider value={{ isAuth, setAuth: makeAuthentication }}>
      {children}
    </Context.Provider>
  );
};

export default AuthContext;
