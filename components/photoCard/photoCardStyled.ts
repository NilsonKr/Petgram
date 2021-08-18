import styled from "styled-components";
import { entranceAnimation } from "../../styles/animations";

export const ImgWrapper = styled.div`
  width: 100%;
  padding: 5px 10px;
  ${entranceAnimation({ duration: ".5s" })}

  & img {
    min-width: 100%;
    width: 100%;
    min-height: 350px;
    max-height: 350px;
    vertical-align: middle;
    border-radius: 10px;
    object-fit: cover;
    cursor: pointer;
    background-color: aquamarine;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px 10px;
  margin-bottom: 20px;

  & span {
    margin-left: 5px;
    font-size: 1.2rem;
    font-weight: 600;
  }

  & svg {
    cursor: pointer;
  }
`;
