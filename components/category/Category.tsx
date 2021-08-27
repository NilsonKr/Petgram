import Link from "next/link";

import { CategoryItem } from "./categoryStyled";

const DEFAULT_IMAGE = " https://i.imgur.com/dJa0Hpl.jpg";

const Category = ({
  cover = DEFAULT_IMAGE,
  emoji = "⛄",
  name,
  id,
}: Tcategory) => {
  return (
    <Link href={`/category/${id}`}>
      <CategoryItem>
        <img src={cover} alt={name} />
        <span>{emoji}</span>
      </CategoryItem>
    </Link>
  );
};

export default Category;
