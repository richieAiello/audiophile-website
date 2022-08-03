import { ReactComponent as Icon } from '../../assets/cart.svg';

const CartBtn = props => {
  return (
    <button
      type="button"
      aria-label="Open shopping cart."
      className={`cursor-pointer
        ${props.className}
      `}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <Icon className="icon-cart" />
    </button>
  );
};

export default CartBtn;
