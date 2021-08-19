import { useState, useEffect } from "react";
import {
  ListStyled,
  ItemStyled,
  FloatListStyled,
  PlaceholderStyled,
} from "./categoriesListStyled";
import useFloatList from "../../hooks/useIntersection";

import Category from "../category/Category";

const DEFAULT_ITEMS = [1, 2, 3, 4, 5, 6];

const CategoriesList = () => {
  const [categories, setCategories] = useState<Tcategory[]>([]);
  const [isAtTop, elementRef] = useFloatList();

  useEffect(() => {
    window
      .fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {!isAtTop && (
        <FloatListStyled>
          {categories.map((category: Tcategory) => (
            <ItemStyled key={category.id}>
              <Category {...category} />
            </ItemStyled>
          ))}
          {!categories.length &&
            DEFAULT_ITEMS.map((key) => <PlaceholderStyled key={key} />)}
        </FloatListStyled>
      )}

      <ListStyled ref={elementRef}>
        {categories.map((category: Tcategory) => (
          <ItemStyled key={category.id}>
            <Category {...category} />
          </ItemStyled>
        ))}
        {!categories.length &&
          DEFAULT_ITEMS.map((key) => <PlaceholderStyled key={key} />)}
      </ListStyled>
    </>
  );
};

export default CategoriesList;
