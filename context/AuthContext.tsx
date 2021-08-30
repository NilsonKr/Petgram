import React, { useState } from "react";
import useSessionStorage from "hooks/useSessionStorage";
import { useMutation, ApolloError } from "@apollo/client";
import { registerMutation, loginMutation } from "../graphql/mutations";

type FormValues = { [key: string]: string };

type TauthContext = {
  isAuth: boolean | string;
  setAuth: (values: FormValues, type: string) => void;
  logout: () => void;
  loading: boolean;
  error: string | boolean;
};

export const Context = React.createContext<Partial<TauthContext>>({});

const AuthContext: React.FC = ({ children }) => {
  const [isAuth, setAuth, logout] = useSessionStorage("token");
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
        .then(({ data }: TauthFecthResult) => setAuth(data!.signup))
        .catch((err: ApolloError) => {
          console.log(err);
          setError(err.message);
        });
    } else {
      login({ variables: { loginInput: values } })
        .then(({ data }: TauthFecthResult) => setAuth(data!.login))
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
        logout: logout,
        loading: registerLoad || loginLoad,
        error: isError,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AuthContext;
