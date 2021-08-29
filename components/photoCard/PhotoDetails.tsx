import useIntersection from "../../hooks/useIntersection";

import { ImgWrapperDetails, DetailsWrapper } from "./photoCardStyled";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { AiOutlineTag } from "react-icons/ai";

type Tprops = {
  id: number | string;
  src?: string;
  likes: number;
  like: TlikeFnProp;
  liked: boolean;
};

const PhotoCard = ({ likes, src, like, liked }: Tprops) => {
  const [isIntersec, elRef] = useIntersection(true);

  return (
    <article ref={elRef}>
      <ImgWrapperDetails onDoubleClick={like}>
        <img src={isIntersec ? src : ""} alt="Card" />
      </ImgWrapperDetails>
      <DetailsWrapper>
        <section>
          {liked ? (
            <IoMdHeart size="30px" onClick={like} />
          ) : (
            <IoMdHeartEmpty size="30px" onClick={like} />
          )}
          <span>{likes} likes </span>
        </section>
        <section>
          <AiOutlineTag size="30px" />
        </section>
      </DetailsWrapper>
    </article>
  );
};

export default PhotoCard;
