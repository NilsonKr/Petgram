import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const FieldStyled = styled.label`
  width: 300px;
  margin: 10px 0;
  text-align: start;
  font-size: 1.2rem;

  & input {
    width: 100%;
    border: 1px solid rgb(219, 219, 219);
    font-size: 1.1rem;
    padding: 8px 5px;
    border-radius: 3px;
    color: rgb(90, 90, 90);
  }

  & input:focus-visible {
    outline: none;
    border: 1px solid rgb(180, 180, 180);
  }

  & input::placeholder {
    color: rgb(180, 180, 180);
  }
`;

export const SubmitButton = styled.button`
  margin: 10px 0 20px;
  padding: 15px;
  border-radius: 8px;
  background-color: rgb(184, 24, 224);
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 0 4px rgb(227, 113, 255);
  }
`;
