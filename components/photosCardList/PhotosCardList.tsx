import { useQuery } from "@apollo/client";
import { photosQuery } from "../../graphql/queries";

import PhotoCard from "../photoCard/PhotoCard";
import Loader from "../Loader/Loader";

import { PhotosListStyled } from "./PhotosListStyled";
import { ImgWrapper, DetailsWrapper } from "../photoCard/photoCardStyled";
import { IoMdHeartEmpty } from "react-icons/io";

const DEFAULT_ITEMS = [1, 2, 3, 4, 5];

const PhotosCardList = () => {
  const { data, loading } = useQuery(photosQuery, {
    variables: { categoryId: 1 },
  });

  return (
    <PhotosListStyled>
      {data &&
        data.photos.map((photo: TphotoCard) => {
          return <PhotoCard {...photo} key={photo.id} />;
        })}
      {loading &&
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
