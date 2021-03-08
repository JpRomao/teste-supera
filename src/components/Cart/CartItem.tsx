import { CartItemCell } from "./styles";

import { ProductsOnCartProps } from '../../pages/Games';
import transformToBRL from "../../services/transformToBRL";
import Strong from "../Strong";

const CartItem: React.FC<ProductsOnCartProps> = ({name, price, image, children}) => {
  return (
    <CartItemCell>
      <span>
        <img src={`${process.env.PUBLIC_URL}/assets/${image}`} alt="" />
      </span>
      <Strong
        label={name}
      />
      <span>{transformToBRL(price)}</span>
      {children}
    </CartItemCell>
  );
}

export default CartItem;
