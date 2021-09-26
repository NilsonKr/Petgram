import {
  ListStyled,
  ItemStyled,
  FloatListStyled,
} from "./categoriesListStyled";
import useFloatList from "../../hooks/useIntersection";

import Category from "../category/Category";

const CategoriesList = ({ data }: { data: any[] }) => {
  const [isAtTop, elementRef] = useFloatList();

  return (
    <>
      {!isAtTop && (
        <FloatListStyled>
          {data!.map((category: Tcategory) => (
            <ItemStyled key={category.id}>
              <Category {...category} isFloat={true} />
            </ItemStyled>
          ))}
        </FloatListStyled>
      )}

      <ListStyled ref={elementRef}>
        {data!.map((category: Tcategory) => (
          <ItemStyled key={category.id}>
            <Category {...category} />
          </ItemStyled>
        ))}
      </ListStyled>
    </>
  );
};

export default CategoriesList;
