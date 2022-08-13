import { useCartState } from '../../../context/CartContext';
import { ReactComponent as Icon } from '../../../assets/cart.svg';

const ShoppingCartBtn = props => {
  const cart = useCartState();

  return (
    <div className="relative md:ml-auto">
      <button
        type="button"
        aria-label="Open shopping cart."
        className={`cursor-pointer
          ${props.className}
        `}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        <Icon className="inline icon-cart" />
      </button>
      {cart.length > 0 && (
        <div
          className="absolute font-bold text-white text-[0.875rem] leading-none w-max h-max bottom-5 -right-2
          sm:bg-orange sm:-bottom-1 sm:right-8 sm:h-8 sm:w-8 sm:flex sm:items-center 
          sm:justify-center sm:rounded-full"
          aria-hidden
        >
          {cart.reduce((total, current) => {
            return total + current.quantity;
          }, 0)}
        </div>
      )}
    </div>
  );
};

export default ShoppingCartBtn;
