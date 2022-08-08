import { useCartState } from '../../../context/CartContext';
import CartCount from './CartCount';
import EmptyCartBtn from './EmptyCartBtn';
import CartContents from './CartContents';
import CartTotal from './CartTotal';
import CheckoutBtn from './CheckoutBtn';

const ShoppingCart = props => {
  const cart = useCartState();

  return (
    <div
      className={`
        container absolute z-10 top-[7.125rem] left-0 right-0 mx-auto rounded-lg 
        max-h-[calc(100vh-8.625rem)] overflow-y-scroll bg-white py-8 px-7
        grid grid-cols-[1fr,1fr]
        ${props.className}
      `}
    >
      <CartCount cart={cart} />
      <EmptyCartBtn />
      <CartContents cart={cart} />
      <CartTotal cart={cart} />
      <CheckoutBtn />
    </div>
  );
};

export default ShoppingCart;