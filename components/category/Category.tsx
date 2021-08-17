import { CategoryItem } from "./categoryStyled";

const DEFAULT_IMAGE = " https://i.imgur.com/dJa0Hpl.jpg";

const Category = ({ cover = DEFAULT_IMAGE, emoji = "⛄", name }: Tcategory) => {
  return (
    <CategoryItem>
      <img src={cover} alt={name} />
      <span>{emoji}</span>
    </CategoryItem>
  );
};

export default Category;
