import { useCartDispatch } from '../../../context/CartContext';

const CartItem = ({ cart, product }) => {
  const dispatch = useCartDispatch();
  let quantity = product.quantity;

  const currentProduct = cart.find(item => {
    return item.slug === product.slug;
  });

  // Find index of current product in cart
  const updateProduct = () => {
    const indexOne = cart.indexOf(currentProduct);
    const indexTwo = [indexOne + 1];

    return [
      ...cart.slice(0, indexOne),
      currentProduct,
      ...cart.slice(indexTwo),
    ];
  };

  const handleDecrementClick = e => {
    if (quantity > 1) {
      currentProduct.quantity--;

      dispatch({
        type: 'DECREMENT',
        decrementProduct: updateProduct(),
      });
    }
    if (quantity === 1) {
      const newCart = cart.filter(item => {
        return item.slug !== currentProduct.slug;
      });

      dispatch({
        type: 'REMOVE',
        removeProduct: [...newCart],
      });
    }
  };

  const handleIncrementClick = e => {
    if (quantity < 10) {
      currentProduct.quantity++;

      dispatch({
        type: 'INCREMENT',
        incrementProduct: updateProduct(),
      });
    }
  };

  return (
    <div className="grid grid-flow-col grid-cols-[auto,1fr,1fr] items-center font-bold uppercase">
      <img
        src={product.icon}
        alt=""
        className="rounded-lg w-16 h-16"
      />
      <div className="ml-4">
        <p>{product.name}</p>
        <p className="opacity-50 text-[0.875rem]">{`$ ${product.price}`}</p>
      </div>
      <div className="bg-grey flex justify-between items-center px-3 w-[min(100%,6rem)] h-10 justify-self-end">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={handleDecrementClick}
          className="duration-[250ms] hover:text-orange focus:text-orange"
        >
          -
        </button>
        <span className="">{quantity}</span>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={handleIncrementClick}
          className="duration-[250ms] hover:text-orange focus:text-orange"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
