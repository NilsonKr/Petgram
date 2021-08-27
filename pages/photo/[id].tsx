import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { photoDetail } from "../../graphql/queries";

import HomeLayout from "components/HomeLayout/HomeLayout";

import PhotoCard from "@components/photoCard/PhotoCard";
import PhotoContainer from "HOC/PhotoContainer";

const PhotoDetail = () => {
  const { query } = useRouter();
  const { data } = useQuery<{ photo: TphotoCard }>(photoDetail, {
    variables: { photoId: `${query.id}` },
  });

  console.log(data);

  const render = (photo: TphotoCard, like: TlikeFnProp, isLiked: boolean) => {
    return <PhotoCard {...photo} like={like} isLiked={isLiked} />;
  };

  return (
    <HomeLayout>
      {data && (
        <PhotoContainer
          photo={{ ...data.photo, id: query.id as string }}
          render={render}
        ></PhotoContainer>
      )}
    </HomeLayout>
  );
};

export default PhotoDetail;
