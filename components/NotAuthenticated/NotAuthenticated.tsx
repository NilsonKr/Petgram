import React, { useState, useContext } from "react";
import {
  NotAuthenticatedStyled,
  ChangeFormSpan,
} from "./NotAuthenticatedStyles";
import { Context } from "../../context/AuthContext";

import AuthForm from "@components/authForm/AuthForm";

const NotAuthenticated = () => {
  const { setAuth } = useContext(Context);
  const [authType, setAuthType] = useState("signup");

  //Submit to make authentication
  const handleSubmit = (evt: React.FormEvent, values: any) => {
    evt.preventDefault();

    setAuth!(values, authType);
  };

  return (
    <NotAuthenticatedStyled>
      <img src="/illustration1.png" alt="Cutie Cat" />
      <p>Oh! Seems like you dont have an account yet!</p>
      <h2>{authType === "signup" ? "Sign Up" : "Log In"}</h2>
      <AuthForm submitAuth={handleSubmit} type={authType} />
      {authType === "signup" ? (
        <ChangeFormSpan onClick={() => setAuthType("login")}>
          Have an account already? Log In
        </ChangeFormSpan>
      ) : (
        <ChangeFormSpan onClick={() => setAuthType("signup")}>
          Join us! Create an account
        </ChangeFormSpan>
      )}
    </NotAuthenticatedStyled>
  );
};

export default NotAuthenticated;
