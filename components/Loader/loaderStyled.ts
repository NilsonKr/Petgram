import styled from "styled-components";
import { skeletonAnimation } from "../../styles/animations";

type props = {
  width: string;
  height: string;
};

export const LoaderStyled = styled.div<props>`
  height: ${(p) => p.height};
  width: ${(p) => p.width};
  background: linear-gradient(
      to right,
      rgb(255 255 255 / 0%),
      rgb(236 236 236 / 50%) 50%,
      rgb(255 255 255 / 0%) 100%
    ),
    lightgray;
  background-repeat: repeat-y;
  background-size: 40px;
  background-position: -10% 0;
  ${skeletonAnimation({ duration: ".8s", type: "ease" })}
`;
