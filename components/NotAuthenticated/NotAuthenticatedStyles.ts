import styled from "styled-components";

export const NotAuthenticatedStyled = styled.section`
  width: 100%;
  text-align: center;

  & img {
    max-width: 250px;
    max-height: 300px;
  }

  & h2 {
    font-size: 2rem;
    width: 80%;
    margin: 15px auto;
  }
`;

export const ChangeFormSpan = styled.span`
  color: #6b0086;
  text-decoration: underline;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    color: #c377d6;
  }
`;
