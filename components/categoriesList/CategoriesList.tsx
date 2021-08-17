import Category from "../category/Category";
import { ListStyled, ItemStyled } from "./categoriesListStyled";

const CategoriesList = () => {
  return (
    <ListStyled>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((category) => (
        <ItemStyled>
          <Category category="Cats" url="" key={category} />
        </ItemStyled>
      ))}
    </ListStyled>
  );
};

export default CategoriesList;
