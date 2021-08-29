import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { photoDetail } from "../../graphql/queries";

import HomeLayout from "components/HomeLayout/HomeLayout";

import PhotoDetails from "@components/photoCard/PhotoDetails";
import PhotoContainer from "HOC/PhotoContainer";
import PhotoLoader from "@components/Loader/PhotoLoader";

const PhotoDetail = () => {
  const { query } = useRouter();
  const { data, loading } = useQuery<{ photo: TphotoCard }>(photoDetail, {
    variables: { photoId: `${query.id}` },
  });

  //Render photo details view with like functionalities
  const render = (photo: TphotoCard, like: TlikeFnProp) => {
    return <PhotoDetails {...photo} like={like} />;
  };

  return (
    <HomeLayout>
      {data && (
        <PhotoContainer
          photo={{ ...data.photo, id: query.id as string }}
          render={render}
        ></PhotoContainer>
      )}
      {loading && <PhotoLoader />}
    </HomeLayout>
  );
};

export default PhotoDetail;
