import { useCartState } from '../../../context/CartContext';
import { ReactComponent as Icon } from '../../../assets/cart.svg';

const ShoppingCartBtn = props => {
  const cart = useCartState();

  return (
    <button
      type="button"
      aria-label="Open shopping cart."
      className={`cursor-pointer md:ml-auto flex items-center
        ${props.className}
      `}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {cart.length > 0 && (
        <span className="font-bold mr-2 bg-light-orange px-2 rounded-full">
          {cart.reduce((total, current) => {
            return total + current.quantity;
          }, 0)}
        </span>
      )}
      <Icon className="icon-cart" />
    </button>
  );
};

export default ShoppingCartBtn;
