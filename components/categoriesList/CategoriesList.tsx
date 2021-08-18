import { useState, useEffect } from "react";
import Category from "../category/Category";
import {
  ListStyled,
  ItemStyled,
  PlaceholderStyled,
} from "./categoriesListStyled";

const DEFAULT_ITEMS = [1, 2, 3, 4, 5, 6];

const CategoriesList = () => {
  const [categories, setCategories] = useState<Tcategory[]>([]);

  useEffect(() => {
    window
      .fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ListStyled>
      {categories.map((category: Tcategory) => (
        <ItemStyled key={category.id}>
          <Category {...category} />
        </ItemStyled>
      ))}
      {!categories.length &&
        DEFAULT_ITEMS.map((key) => <PlaceholderStyled key={key} />)}
    </ListStyled>
  );
};

export default CategoriesList;
