import styled from "styled-components";

export const NotFound = styled.div`
  text-align: center;

  & img {
    width: 100%;
  }

  & p {
    margin: 20px 0;
    font-size: 1.5rem;
  }
`;

export const NotFoundText = styled.h1`
  font-size: 4rem;
  -webkit-text-stroke: 2px black;
  text-shadow: 5px 5px #14f0f8;
  /* text-shadow: 4px 4px black, 3px 3px black, 2px 2px black, 1px 1px black; */
  color: transparent;
`;
