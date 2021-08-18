import styled from "styled-components";

export const ListStyled = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px 5px 20px;
  overflow-x: scroll;
`;

export const ItemStyled = styled.li`
  margin: 0 15px;
`;

export const PlaceholderStyled = styled.li`
  width: 75px;
  height: 75px;
  margin: 0 15px;
  border-radius: 50%;
  background-color: lightgray;
`;
