import { useQuery, gql } from "@apollo/client";

import PhotoCard from "../photoCard/PhotoCard";
import Loader from "../Loader/Loader";

import { PhotosListStyled } from "./PhotosListStyled";
import { ImgWrapper, DetailsWrapper } from "../photoCard/photoCardStyled";
import { IoMdHeartEmpty } from "react-icons/io";

const DEFAULT_ITEMS = [1, 2, 3, 4, 5];

const photosQuery = gql`
  {
    photos {
      id
      src
      likes
      liked
      userId
      categoryId
    }
  }
`;

const PhotosCardList = () => {
  const { data, loading } = useQuery(photosQuery);

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
