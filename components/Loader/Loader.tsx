import React from "react";
import { LoaderStyled } from "./loaderStyled";

type props = {
  width: string;
  height: string;
};

const Loader: React.FC<props> = ({ children, width, height }) => {
  return (
    <LoaderStyled height={height} width={width}>
      {children}
    </LoaderStyled>
  );
};

export default Loader;
