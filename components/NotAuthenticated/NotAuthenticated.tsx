import React, { useState, useContext } from "react";
import useForm from "hooks/useForm";
import { Context } from "../../context/AuthContext";

import AuthForm from "@components/authForm/AuthForm";

import {
  NotAuthenticatedStyled,
  ChangeFormSpan,
} from "./NotAuthenticatedStyles";
import { ErrorMessage } from "../../styles/globalStyles";

const NotAuthenticated = () => {
  const { setAuth, loading, error } = useContext(Context);
  const [authType, setAuthType] = useState("signup");
  const { formValues, setNewValues, resetForm } = useForm();

  //Handle fill form fields
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNewValues(evt.target.name, evt.target.value);
  };

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
      <AuthForm
        handleChange={handleChange}
        submitAuth={handleSubmit}
        type={authType}
        formValues={formValues}
        isLoading={loading!}
      />
      <ChangeFormSpan
        onClick={() => {
          resetForm();
          setAuthType(authType === "signup" ? "login" : "signup");
        }}
      >
        {authType === "signup"
          ? "Have an account already? Log In"
          : "Join us! Create One"}
      </ChangeFormSpan>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </NotAuthenticatedStyled>
  );
};

export default NotAuthenticated;
