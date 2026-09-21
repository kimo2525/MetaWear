import { Link, useParams } from "react-router-dom";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import { useDispatch, useSelector } from "react-redux";

import {
  ProductPageComponent,
  Image,
  ProductDetails,
  PriceRatingName,
  ShowCase,
  Item,
  OldPrice,
  Colors,
  Sizes,
  ProductInformation,
} from "./product.styles";

import { addItemToCart } from "../../store/cart/cart.action";

import { selectCartItems } from "../../store/cart/cart.selector";
import BreadCrumb from "../../components/bread-crumb/bread-crumb.compnent";

const ProductPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { character, productSlug } = useParams();
  const charactersMap = useSelector(selectCategoriesMap);
  const products = charactersMap[character];
  const product = products?.find((item) => item.slug === productSlug);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  console.log(product, "product");
  const links = [
    { href: "/shop", label: "shop" },
    { href: `/shop/${character}`, label: character },
    { href: ``, label: product?.title },
  ];
  return (
    <ProductPageComponent>
      <BreadCrumb links={links} />
      {/* <BreadCrumb>
        <Link to="/shop">Shop</Link>
        <span> / </span>
        <Link to={`/shop/${character}`}>{character}</Link>
        <span> / </span>
        <Link>{product?.title}</Link>
      </BreadCrumb> */}
      <ProductInformation>
        <ShowCase>
          <Image src={product?.image} alt={product?.title} />
        </ShowCase>
        <PriceRatingName>
          <Item>{product?.title}</Item>
          <Item>
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star}>
                {star <= Math.round(product?.rating) ? "★" : "☆"}
              </span>
            ))}
            <span>{product?.rating}</span>
            <span>{` (${product?.reviewCount} reviews)`}</span>
          </Item>
          <Item>
            ${product?.price}
            {product?.originalPrice && (
              <OldPrice>${product?.originalPrice}</OldPrice>
            )}
          </Item>
          <Item>{product?.description}</Item>
          <Item>
            <label htmlFor="">Color</label>
            <Colors>
              {product?.colors?.map((item) => (
                <li>{item}</li>
              ))}
            </Colors>
          </Item>
          <Item>
            <label htmlFor="">Size</label>
            <Sizes>
              {product?.sizes?.map((item) => (
                <li>[{`${item}`}]</li>
              ))}
            </Sizes>
          </Item>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={addProductToCart}
          >
            Add to cart
          </Button>
        </PriceRatingName>
      </ProductInformation>
      <br />
      <ProductDetails>
        <strong>PRODUCT DETAILS</strong>
        <Item>
          {product?.features.map((item) => (
            <span>{item}</span>
          ))}
        </Item>
      </ProductDetails>
    </ProductPageComponent>
  );
};

export default ProductPage;
