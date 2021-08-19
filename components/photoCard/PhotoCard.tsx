import { useState } from "react";
import useFloatList from "../../hooks/useIntersection";

import { ImgWrapper, DetailsWrapper } from "./photoCardStyled";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

type Tprops = {
  id: number;
  src?: string;
  likes: number;
};

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

const PhotoCard = ({ id, likes, src = DEFAULT_IMAGE }: Tprops) => {
  const [isIntersec, elRef] = useFloatList(true);
  // is Liked ?
  const [isLiked, toggleLike] = useState(() => {
    try {
      const foundLike = window.localStorage.getItem(`${id}`);

      if (foundLike) {
        return JSON.parse(foundLike);
      }

      return foundLike;
    } catch (error) {
      return false;
    }
  });

  const like = () => {
    try {
      window.localStorage.setItem(`${id}`, `${!isLiked}`);
      toggleLike(!isLiked);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article ref={elRef}>
      <ImgWrapper onDoubleClick={like}>
        <img src={isIntersec ? src : ""} alt="Card" />
      </ImgWrapper>
      <DetailsWrapper>
        {isLiked ? (
          <IoMdHeart size="30px" onClick={like} />
        ) : (
          <IoMdHeartEmpty size="30px" onClick={like} />
        )}
        <span>{likes} likes </span>
      </DetailsWrapper>
    </article>
  );
};

export default PhotoCard;
