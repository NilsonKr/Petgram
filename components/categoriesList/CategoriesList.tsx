import { useQuery } from "@apollo/client";
import { getCategories } from "../../graphql/queries";
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
  const { data, loading } =
    useQuery<{ categories: Tcategory[] }>(getCategories);
  const [isAtTop, elementRef] = useFloatList();

  return (
    <>
      {!isAtTop && (
        <FloatListStyled>
          {!loading &&
            data!.categories.map((category: Tcategory) => (
              <ItemStyled key={category.id}>
                <Category {...category} />
              </ItemStyled>
            ))}
          {loading &&
            DEFAULT_ITEMS.map((key) => <PlaceholderStyled key={key} />)}
        </FloatListStyled>
      )}

      <ListStyled ref={elementRef}>
        {!loading &&
          data!.categories.map((category: Tcategory) => (
            <ItemStyled key={category.id}>
              <Category {...category} />
            </ItemStyled>
          ))}
        {loading && DEFAULT_ITEMS.map((key) => <PlaceholderStyled key={key} />)}
      </ListStyled>
    </>
  );
};

export default CategoriesList;
