import styled from "styled-components";
import { entranceAnimation } from "../../styles/animations";

export const ListStyled = styled.ul`
  display: flex;
  top: 20px;
  justify-content: start;
  align-items: center;
  padding: 10px 5px 20px;
  overflow-x: scroll;
`;

export const ItemStyled = styled.li`
  margin: 0 15px;
  cursor: pointer;
`;

export const PlaceholderStyled = styled.li`
  width: 75px;
  height: 75px;
  margin: 0 15px;
  border-radius: 50%;
  background-color: lightgray;
`;

export const FloatListStyled = styled.ul`
  display: flex;
  position: fixed;
  top: 0px;
  left: 50%;
  max-width: 100%;
  justify-content: start;
  align-items: center;
  padding: 5px;
  overflow-x: scroll;
  border-radius: 50px;
  background-color: #fff;
  transform: translateX(-50%);
  z-index: 1;

  ${entranceAnimation({ duration: ".3s" })}
`;
