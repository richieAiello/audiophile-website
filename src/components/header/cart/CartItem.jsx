import { useCartDispatch } from '../../../context/CartContext';
import QuantityBtn from '../../shared-components/QuantityBtn';

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
    if (quantity < 100) {
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
      <QuantityBtn
        quantity={quantity}
        onDecrementClick={handleDecrementClick}
        onIncrementClick={handleIncrementClick}
        className="row-start-2 w-[6.5rem] px-3 sm:justify-self-end sm:row-auto"
      />
    </div>
  );
};

export default CartItem;
