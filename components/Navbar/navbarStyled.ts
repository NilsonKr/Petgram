import styled from "styled-components";

export const NavStyled = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fcfcfc;
  box-shadow: 0 -8px 10px -4px rgba(0, 0, 0, 0.1);

  & article {
    cursor: pointer;
  }
`;
