import Category from "../category/Category";
import { ListStyled, ItemStyled } from "./categoriesListStyled";
import { categories } from "../../api/db.json";

const CategoriesList = () => {
  return (
    <ListStyled>
      {categories.map((category: Tcategory) => (
        <ItemStyled key={category.id}>
          <Category {...category} />
        </ItemStyled>
      ))}
    </ListStyled>
  );
};

export default CategoriesList;
