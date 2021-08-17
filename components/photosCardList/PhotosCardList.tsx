import { PhotosListStyled } from "./PhotosListStyled";
import PhotoCard from "../photoCard/PhotoCard";

const PhotosCardList = () => {
  return (
    <PhotosListStyled>
      {[1, 2, 3, 4, 5].map((card) => {
        return <PhotoCard likes={card} key={card} />;
      })}
    </PhotosListStyled>
  );
};

export default PhotosCardList;
