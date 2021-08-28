import styled from "styled-components";

export const NotAuthenticatedStyled = styled.section`
  width: 100%;
  text-align: center;

  & img {
    max-width: 300px;
    max-height: 400px;
  }

  & h2 {
    font-size: 2rem;
    width: 80%;
    margin: 15px auto;
  }

  & button {
    margin-top: 10px;
    padding: 15px;
    border-radius: 8px;
    background-color: rgb(184, 24, 224);
    color: white;
    font-size: 1.7rem;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;
  }

  & button:hover {
    box-shadow: 0px 0px 0 4px rgb(227, 113, 255);
  }
`;
