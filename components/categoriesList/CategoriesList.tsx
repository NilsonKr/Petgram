import {
  ListStyled,
  ItemStyled,
  FloatListStyled,
} from "./categoriesListStyled";
import useFloatList from "../../hooks/useIntersection";

import Category from "../category/Category";

import PropTypes from "prop-types";

const CategoriesList = ({ data }: { data: any[] }) => {
  const [isAtTop, elementRef] = useFloatList();

  return (
    <section aria-label="Categories list">
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
          <ItemStyled key={category.id} aria-label="Category item">
            <Category {...category} />
          </ItemStyled>
        ))}
      </ListStyled>
    </section>
  );
};

CategoriesList.propTypes = {
  data: PropTypes.array,
};

export default CategoriesList;
