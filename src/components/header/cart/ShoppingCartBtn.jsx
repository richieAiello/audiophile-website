import { useCartState } from '../../../context/CartContext';
import { ReactComponent as Icon } from '../../../assets/cart.svg';

const ShoppingCartBtn = props => {
  const cart = useCartState();

  return (
    <button
      type="button"
      aria-label="Open shopping cart."
      className={`cursor-pointer flex items-center relative md:ml-auto 
        ${props.className}
      `}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {cart.length > 0 && (
        <span
          className="absolute font-bold bg-light-orange pl-[1.75px] pt-[1px] h-7 w-7 rounded-full
          -right-8"
        >
          <span className="align-middle">
            {cart.reduce((total, current) => {
              return total + current.quantity;
            }, 0)}
          </span>
        </span>
      )}
      <Icon className="icon-cart" />
    </button>
  );
};

export default ShoppingCartBtn;
