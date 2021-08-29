import React, { useState } from "react";
import { useMutation, ApolloError } from "@apollo/client";
import { registerMutation, loginMutation } from "../graphql/mutations";

type FormValues = { [key: string]: string };

type TauthContext = {
  isAuth: boolean;
  setAuth: (values: FormValues, type: string) => void;
  loading: boolean;
  error: string | boolean;
};

export const Context = React.createContext<Partial<TauthContext>>({});

const AuthContext: React.FC = ({ children }) => {
  const [isAuth, setAuth] = useState(false);
  const [isError, setError] = useState<boolean | string>(false);
  // Login and Signup mutations
  const [register, { loading: loginLoad }] = useMutation(registerMutation);
  const [login, { loading: registerLoad }] = useMutation(loginMutation);

  //Trigger mutation
  const makeAuthentication = (values: FormValues, type: string) => {
    setError(false);

    //Do signup or login requets
    if (type === "signup") {
      register({ variables: { signupInput: values } })
        .then(() => setAuth(true))
        .catch((err: ApolloError) => {
          console.log(err);
          setError(err.message);
        });
    } else {
      login({ variables: { loginInput: values } })
        .then(() => setAuth(true))
        .catch((err: ApolloError) => {
          console.log(err);
          setError(err.message);
        });
    }
  };

  return (
    <Context.Provider
      value={{
        isAuth,
        setAuth: makeAuthentication,
        loading: registerLoad || loginLoad,
        error: isError,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AuthContext;
