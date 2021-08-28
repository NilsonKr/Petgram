import React from "react";

import { FormStyled, FieldStyled, SubmitButton } from "./AuthFormStyled";

type props = {
  type: string;
  submitAuth: () => void;
};

const AuthForm = ({ type, submitAuth }: props) => {
  return (
    <FormStyled>
      {type === "signup" && (
        <FieldStyled>
          UserName
          <input type="text" name="name" placeholder="Your Name" />
        </FieldStyled>
      )}
      <FieldStyled>
        E-mail
        <input type="text" name="name" placeholder="someone@example.com" />
      </FieldStyled>
      <FieldStyled>
        Password
        <input type="password" name="name" placeholder="********" />
      </FieldStyled>
      <SubmitButton onClick={submitAuth}>
        {type === "signup" ? "Create One!" : "Sign In"}
      </SubmitButton>
    </FormStyled>
  );
};

export default AuthForm;
