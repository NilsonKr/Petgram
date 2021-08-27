import Link from "next/link";
import useIntersection from "../../hooks/useIntersection";

import { ImgWrapper, DetailsWrapper } from "./photoCardStyled";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import { AiOutlineTag } from "react-icons/ai";

type Tprops = {
  id: number | string;
  src?: string;
  likes: number;
  like: TlikeFnProp;
  isLiked: boolean;
};

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

const PhotoCard = ({
  id,
  likes,
  src = DEFAULT_IMAGE,
  like,
  isLiked,
}: Tprops) => {
  const [isIntersec, elRef] = useIntersection(true);

  return (
    <article ref={elRef}>
      <ImgWrapper onDoubleClick={like}>
        <img src={isIntersec ? src : ""} alt="Card" />
      </ImgWrapper>
      <DetailsWrapper>
        <section>
          {isLiked ? (
            <IoMdHeart size="30px" onClick={like} />
          ) : (
            <IoMdHeartEmpty size="30px" onClick={like} />
          )}
          <span>{likes} likes </span>
        </section>
        <section>
          <AiOutlineTag size="30px" />
          <Link href={`/photo/${id}`}>
            <div>
              <CgDetailsMore size="40px" />
            </div>
          </Link>
        </section>
      </DetailsWrapper>
    </article>
  );
};

export default PhotoCard;
