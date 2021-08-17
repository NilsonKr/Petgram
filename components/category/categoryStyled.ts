import styled from "styled-components";

export const CategoryItem = styled.div`
  position: relative;
  width: 75px;
  height: 75px;

  img {
    width: 100%;
    height: 100%;
    border: 2px solid #ddd;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    object-fit: cover;
  }

  span {
    position: absolute;
    bottom: -5px;
    right: -5px;
    font-size: 1.5rem;
  }
`;
