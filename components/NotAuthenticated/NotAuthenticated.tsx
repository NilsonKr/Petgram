import { useState } from "react";
import {
  NotAuthenticatedStyled,
  ChangeFormSpan,
} from "./NotAuthenticatedStyles";

import AuthForm from "@components/authForm/AuthForm";

const NotAuthenticated = ({ setAuth }: { setAuth: () => void }) => {
  const [authType, setAuthType] = useState("signup");

  return (
    <NotAuthenticatedStyled>
      <img src="/illustration1.png" alt="Cutie Cat" />
      <p>Oh! Seems like you dont have an account yet!</p>
      <h2>{authType === "signup" ? "Sign Up" : "Log In"}</h2>
      <AuthForm submitAuth={setAuth} type={authType} />
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
