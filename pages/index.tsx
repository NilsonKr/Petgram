import { useRouter } from "next/router";
import Logo from "../components/SVGS/Logo/Logo";
import CategoriesList from "../components/categoriesList/CategoriesList";
import PhotosCardList from "components/photosCardList/PhotosCardList";
import PhotoCardContainer from "components/photoCard/PhotoCardContainer";

const index = () => {
  const { query } = useRouter();

  console.group(query);
  return (
    <div>
      <Logo width={320} height={150} />
      <CategoriesList />

      {query.photoId ? (
        <PhotoCardContainer photoId={query.photoId as string} />
      ) : (
        <PhotosCardList />
      )}
    </div>
  );
};

export default index;
