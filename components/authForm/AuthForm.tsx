import React from "react";
import useForm from "hooks/useForm";

import { FormStyled, FieldStyled, SubmitButton } from "./AuthFormStyled";

type props = {
  type: string;
  submitAuth: (evt: React.FormEvent, values: any) => void;
};

const AuthForm = ({ type, submitAuth }: props) => {
  const { setValues, formValues } = useForm();

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValues(evt.target.name, evt.target.value);
  };

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
        />
      </FieldStyled>
      <SubmitButton>
        {type === "signup" ? "Create One!" : "Sign In"}
      </SubmitButton>
    </FormStyled>
  );
};

export default AuthForm;
