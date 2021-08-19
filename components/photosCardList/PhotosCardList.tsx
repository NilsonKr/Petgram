import { useState, useEffect } from "react";
import { PhotosListStyled } from "./PhotosListStyled";
import { ImgWrapper, DetailsWrapper } from "../photoCard/photoCardStyled";
import { IoMdHeartEmpty } from "react-icons/io";
import PhotoCard from "../photoCard/PhotoCard";
import Loader from "../Loader/Loader";

const DEFAULT_ITEMS = [1, 2, 3, 4, 5];

const PhotosCardList = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setItems([1, 2, 3, 4, 5]);
    }, 1000);
  }, []);

  return (
    <PhotosListStyled>
      {items.map((card) => {
        return <PhotoCard id={card} likes={card} key={card} />;
      })}
      {!items.length &&
        DEFAULT_ITEMS.map((key) => (
          <article key={key}>
            <ImgWrapper>
              <Loader width="100%" height="300px" />
            </ImgWrapper>
            <DetailsWrapper>
              <IoMdHeartEmpty size="30px" />
            </DetailsWrapper>
          </article>
        ))}
    </PhotosListStyled>
  );
};

export default PhotosCardList;
