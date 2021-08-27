import { useRouter } from "next/router";

import HomeLayout from "components/HomeLayout/HomeLayout";
import PhotosCardList from "components/photosCardList/PhotosCardList";

const ListOfCategories = () => {
  const { query } = useRouter();

  return (
    <HomeLayout>
      <PhotosCardList categoryId={query.id as string} />
    </HomeLayout>
  );
};

export default ListOfCategories;
