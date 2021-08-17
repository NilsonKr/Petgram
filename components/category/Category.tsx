import { CategoryItem } from "./categoryStyled";

const DEFAULT_IMAGE = " https://i.imgur.com/dJa0Hpl.jpg";

type props = {
  image?: string;
  emoji?: string;
  category: string;
  url: string;
};

const Category = ({ image = DEFAULT_IMAGE, emoji = "⛄", category }: props) => {
  return (
    <CategoryItem>
      <img src={image} alt={category} />
      <span>{emoji}</span>
    </CategoryItem>
  );
};

export default Category;
