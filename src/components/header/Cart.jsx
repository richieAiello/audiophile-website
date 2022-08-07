import CheckoutBtn from './CheckoutBtn';
import {
  useCartState,
  useCartDispatch,
} from '../../context/contexts';

const Cart = props => {
  const cartState = useCartState();
  const dispatch = useCartDispatch();

  return (
    <div
      className={`
        container absolute z-10 top-[7.125rem] left-0 right-0 mx-auto rounded-lg 
        max-h-[calc(100vh-8.625rem)] overflow-y-scroll bg-white py-8 px-7
        ${props.className}
      `}
    >
      {/* for testing */}
      <p>{cartState.length}</p>
      <button onClick={() => dispatch({ type: 'EMPTY' })}>
        Empty
      </button>
      {/* Disable Checkout out button when cart is empty */}
      <CheckoutBtn />
    </div>
  );
};

export default Cart;
