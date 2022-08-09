import { ReactComponent as Icon } from '../../../assets/cart.svg';

const ShoppingCartBtn = props => {
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

export default ShoppingCartBtn;
