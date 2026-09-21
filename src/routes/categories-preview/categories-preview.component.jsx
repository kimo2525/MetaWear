import { Fragment } from "react";
import { useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/category.selector";
import DC_SHOP_DATA2 from "../../DC_SHOP_DATA2";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const wearsMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  // console.log(wearsMap);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(wearsMap).map((title) => {
          const products = wearsMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
