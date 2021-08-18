import { keyframes, css } from "styled-components";

type animationProps = {
  duration?: string;
  type?: string;
  iteration?: number | string;
};

const entranceKeyFrames = keyframes`
  from{ 
    filter: blur(5px);
    opacity: 0;
  }


  to{
    filter: blur(0px);
    opacity: 1;
  }
`;

const skeletonLoad = keyframes`
  100%{
    background-position: 110% 0;
  }
`;

export const entranceAnimation = ({
  duration = "1s",
  type = "linear",
}: animationProps) =>
  css`
    animation: ${entranceKeyFrames} ${duration} ${type};
  `;

export const skeletonAnimation = ({
  duration = "1s",
  type = "linear",
  iteration = "infinite",
}: animationProps) =>
  css`
    animation: ${skeletonLoad} ${duration} ${type} ${iteration};
  `;
