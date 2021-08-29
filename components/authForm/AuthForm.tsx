import React from "react";

import { FormStyled, FieldStyled, SubmitButton } from "./AuthFormStyled";

type props = {
  type: string;
  formValues: { [key: string]: any };
  isLoading: boolean;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  submitAuth: (evt: React.FormEvent, values: any) => void;
};

const AuthForm = ({
  type,
  formValues,
  isLoading,
  handleChange,
  submitAuth,
}: props) => {
  return (
    <FormStyled onSubmit={(evt) => submitAuth(evt, formValues)}>
      {type === "signup" && (
        <FieldStyled>
          UserName
          <input
            type="text"
            name="username"
            placeholder="Your Name"
            onChange={handleChange}
            value={formValues.username || ""}
            disabled={isLoading}
          />
        </FieldStyled>
      )}
      <FieldStyled>
        E-mail
        <input
          type="text"
          name="email"
          placeholder="someone@example.com"
          onChange={handleChange}
          value={formValues.email || ""}
          disabled={isLoading}
        />
      </FieldStyled>
      <FieldStyled>
        Password
        <input
          type="password"
          name="password"
          placeholder="********"
          onChange={handleChange}
          value={formValues.password || ""}
          disabled={isLoading}
        />
      </FieldStyled>
      <SubmitButton disabled={isLoading}>
        {type === "signup" ? "Create One!" : "Sign In"}
      </SubmitButton>
    </FormStyled>
  );
};

export default AuthForm;
