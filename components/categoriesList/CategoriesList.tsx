import { useState, useEffect, useRef } from "react";
import Category from "../category/Category";
import {
  ListStyled,
  ItemStyled,
  FloatListStyled,
  PlaceholderStyled,
} from "./categoriesListStyled";

const DEFAULT_ITEMS = [1, 2, 3, 4, 5, 6];

const CategoriesList = () => {
  const [categories, setCategories] = useState<Tcategory[]>([]);
  const [showFloat, setFloatList] = useState(false);
  const floatList = useRef<HTMLUListElement>(null);

  const handleFloatList: IntersectionObserverCallback = (entries) => {
    console.log(entries[0]);

    if (!entries[0].isIntersecting) {
      setFloatList(true);
    } else {
      setFloatList(false);
    }
  };

  useEffect(() => {
    window
      .fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleFloatList);

    observer.observe(floatList.current as Element);
  }, []);

  return (
    <>
      {showFloat && (
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

      <ListStyled ref={floatList}>
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
