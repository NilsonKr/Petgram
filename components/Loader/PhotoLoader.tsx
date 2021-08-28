import React from "react";

import Loader from "./Loader";
import { ImgWrapper, DetailsWrapper } from "../photoCard/photoCardStyled";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineTag } from "react-icons/ai";

const PhotoLoader = () => {
  return (
    <article>
      <ImgWrapper>
        <Loader width="100%" height="300px" />
      </ImgWrapper>
      <DetailsWrapper>
        <section>
          <IoMdHeartEmpty size="30px" />
          <Loader height="30px" width="100px" />
        </section>
        <AiOutlineTag size="30px" />
      </DetailsWrapper>
    </article>
  );
};

export default PhotoLoader;
