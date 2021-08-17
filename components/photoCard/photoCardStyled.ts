import styled from "styled-components";

export const ImgWrapper = styled.div`
  width: 100%;
  padding: 5px 10px;

  & img {
    width: 100%;
    max-height: 350px;
    vertical-align: middle;
    border-radius: 10px;
    object-fit: cover;
    cursor: pointer;
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
