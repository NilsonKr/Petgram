import Logo from "../components/SVGS/Logo/Logo";
import CategoriesList from "../components/categoriesList/CategoriesList";
import PhotosCardList from "components/photosCardList/PhotosCardList";

const index = () => {
  return (
    <div>
      <Logo width="400" height="200" />
      <CategoriesList />
      <PhotosCardList />
    </div>
  );
};

export default index;
