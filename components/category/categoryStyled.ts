import styled from "styled-components";

export const CategoryItem = styled.div<{ isFloat: boolean }>`
  position: relative;
  width: ${(p) => (p.isFloat ? "40px" : "75px")};
  height: ${(p) => (p.isFloat ? "40px" : "75px")};

  img {
    width: 100%;
    height: 100%;
    border: 2px solid #ddd;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    object-fit: cover;
    background-color: lightgray;
  }

  span {
    position: absolute;
    bottom: -5px;
    right: -5px;
    font-size: ${(p) => (p.isFloat ? "1.2rem" : "1.5rem")};
  }
`;
