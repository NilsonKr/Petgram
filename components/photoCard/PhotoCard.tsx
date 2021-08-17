import { ImgWrapper, DetailsWrapper } from "./photoCardStyled";
import { IoMdHeartEmpty } from "react-icons/io";

type Tprops = {
  src?: string;
  likes: number;
};

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

const PhotoCard = ({ likes, src = DEFAULT_IMAGE }: Tprops) => {
  return (
    <article>
      <ImgWrapper>
        <img src={src} alt="Card" />
      </ImgWrapper>
      <DetailsWrapper>
        <IoMdHeartEmpty size="30px" />
        <span>{likes} likes </span>
      </DetailsWrapper>
    </article>
  );
};

export default PhotoCard;
