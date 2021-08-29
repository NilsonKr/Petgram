import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { registerMutation, loginMutation } from "../graphql/mutations";

type FormValues = { [key: string]: string };

type TauthContext = {
  isAuth: boolean;
  setAuth: (values: FormValues, type: string) => void;
};

export const Context = React.createContext<Partial<TauthContext>>({});

const AuthContext: React.FC = ({ children }) => {
  const [isAuth, setAuth] = useState(false);
  const [register] = useMutation(registerMutation);
  const [login] = useMutation(loginMutation);

  const makeAuthentication = (values: FormValues, type: string) => {
    if (type === "signup") {
      register({ variables: { signupInput: values } });
    } else {
      login({ variables: { loginInput: values } }).then((data) =>
        console.log(data)
      );
    }
  };

  return (
    <Context.Provider value={{ isAuth, setAuth: makeAuthentication }}>
      {children}
    </Context.Provider>
  );
};

export default AuthContext;
