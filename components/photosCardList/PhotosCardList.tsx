import { useQuery } from "@apollo/client";
import { photosQuery } from "../../graphql/queries";

import PhotoCardContainer from "../../HOC/PhotoContainer";
import PhotoCard from "../photoCard/PhotoCard";
import PhotoCardLoader from "../Loader/PhotoLoader";

import { PhotosListStyled } from "./PhotosListStyled";

const DEFAULT_ITEMS = [1, 2, 3, 4, 5];

const PhotosCardList = ({ categoryId }: { categoryId: string }) => {
  const { data, loading } = useQuery(photosQuery, {
    variables: { categoryId: categoryId },
  });

  //prop to render photoCard thumbnail with like functionalities
  const render = (photo: TphotoCard, like: TlikeFnProp) => {
    return <PhotoCard {...photo} like={like} />;
  };

  return (
    <PhotosListStyled>
      {data &&
        data.photos.map((photo: TphotoCard) => (
          <PhotoCardContainer photo={photo} render={render} key={photo.id} />
        ))}
      {loading && DEFAULT_ITEMS.map((key) => <PhotoCardLoader key={key} />)}
    </PhotosListStyled>
  );
};

export default PhotosCardList;
