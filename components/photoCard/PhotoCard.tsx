import Link from "next/link";
import { useMutation } from "@apollo/client";
import { addLikeAnonymus } from "../../graphql/queries";
import useLocalStorage from "../../hooks/useLocalStorage";
import useFloatList from "../../hooks/useIntersection";

import { ImgWrapper, DetailsWrapper } from "./photoCardStyled";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import { AiOutlineTag } from "react-icons/ai";

type Tprops = {
  id: number;
  src?: string;
  likes: number;
};

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

const PhotoCard = ({ id, likes, src = DEFAULT_IMAGE }: Tprops) => {
  const [isIntersec, elRef] = useFloatList(true);
  const [isLiked, toggleLike] = useLocalStorage(id);
  const [addLike] = useMutation(addLikeAnonymus);

  const like = (evt: React.MouseEvent<any>) => {
    evt.stopPropagation();
    !isLiked && addLike({ variables: { photoInput: { id } } });
    toggleLike(!isLiked);
  };

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
