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
    background-color: gray;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 15px;
  margin-bottom: 20px;

  & section {
    display: flex;
    align-items: center;
  }

  & span {
    font-size: 1.2rem;
    font-weight: 600;
  }

  & svg {
    margin: 5px;
    cursor: pointer;
  }
`;
