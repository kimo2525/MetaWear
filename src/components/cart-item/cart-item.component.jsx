import { useNavigate } from "react-router-dom";
import { CartItemContainer, ItemDetails } from "./cart-item.styles";

const CartItem = ({ cartItem, toggleIsCartOpen }) => {
  const { name, image, price, quantity } = cartItem;
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate(
      `/shop/${cartItem?.character.toLowerCase()}/${cartItem?.slug.toLowerCase()}`,
    );
  };
  
  return (
    <CartItemContainer
      onClick={() => {
        goToCheckoutHandler();
        toggleIsCartOpen();
      }}
    >
      <img src={image} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
