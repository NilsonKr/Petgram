import { useRouter } from "next/router";

import PhotosCardList from "components/photosCardList/PhotosCardList";
import PhotoCardContainer from "components/photoCard/PhotoCardContainer";
import HomeLayout from "components/HomeLayout/HomeLayout";

const index = () => {
  const { query } = useRouter();

  return (
    <HomeLayout>
      {query.photoId ? (
        <PhotoCardContainer photoId={query.photoId as string} />
      ) : (
        <PhotosCardList categoryId="" />
      )}
    </HomeLayout>
  );
};

export default index;
