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
    <div className="grid grid-cols-[1fr,auto] items-end sm:grid-flow-col sm:grid-cols-[auto,1fr,1fr] sm:items-center font-bold uppercase">
      <img
        src={product.icon}
        alt=""
        className="rounded-lg w-14 h-14 col-start-2 row-start-2 justify-self-end 
        sm:h-16 sm:w-16 sm:col-auto sm:row-auto"
      />
      <div className="sm:ml-4 sm:max-w-[7ch] md:max-w-none">
        <p className="">{product.name}</p>
        <p className="opacity-50 text-[0.875rem]">{`$ ${product.price}`}</p>
      </div>
      <div
        className="bg-grey flex justify-between items-center px-3 w-[min(100%,6rem)] h-10 row-start-2
        sm:justify-self-end sm:row-auto"
      >
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
