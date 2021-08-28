import styled from "styled-components";

export const NavStyled = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fcfcfc;
  box-shadow: 0 -8px 10px -4px rgba(0, 0, 0, 0.1);

  & article {
    position: relative;
    cursor: pointer;
    color: #8e8e8e;

    &.selected {
      color: black;
    }

    &.selected::after {
      content: "•";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
`;
