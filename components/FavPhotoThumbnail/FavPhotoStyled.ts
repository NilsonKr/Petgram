import styled from "styled-components";

export const FavLists = styled.section`
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  gap: 10px;
  place-content: center;
`;

export const FavThumbnail = styled.article`
  width: 150px;
  height: 150px;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.12);
  }
`;
